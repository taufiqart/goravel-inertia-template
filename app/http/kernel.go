package http

import (
	"maps"
	origin "net/http"

	"github.com/goravel/framework/contracts/http"
	inertia "github.com/romsar/gonertia/v2"
)

type Kernel struct {
}

// The application's global HTTP middleware stack.
// These middleware are run during every request to your application.
func (kernel Kernel) Middleware() []http.Middleware {
	return []http.Middleware{}
}

type InertiaResponse struct {
	ctx   http.Context
	path  string
	props []inertia.Props
}

func NewInertiaResponse(ctx http.Context, path string, props ...inertia.Props) *InertiaResponse {
	return &InertiaResponse{
		ctx:   ctx,
		path:  path,
		props: props,
	}
}

func (receiver *InertiaResponse) Render() error {
	i := receiver.ctx.Context().Value("inertia").(*inertia.Inertia)
	req, err := origin.NewRequest(receiver.ctx.Request().Method(), receiver.ctx.Request().Url(), receiver.ctx.Request().Origin().Body)
	if err != nil {
		return err
	}

	receiver.ctx.Response().Header("Content-Type", "text/html")

	props := make(map[string]any)
	for _, p := range receiver.props {
		maps.Copy(props, p)
	}

	return i.Render(receiver.ctx.Response().Writer(), req, receiver.path, inertia.Props{
		"props": props,
	})
}
