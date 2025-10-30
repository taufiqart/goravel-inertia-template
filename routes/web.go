package routes

import (
	app "goravel/app/http"

	inertia "github.com/romsar/gonertia/v2"

	"github.com/goravel/framework/contracts/http"
	"github.com/goravel/framework/facades"
	"github.com/goravel/framework/support"
)

func Web() {
	// facades.Route().Get("/", func(ctx http.Context) http.Response {
	// 	return ctx.Response().View().Make("welcome.tmpl", map[string]any{
	// 		"version": support.Version,
	// 	})
	// })

	facades.Route().Get("/", func(ctx http.Context) http.Response {
		// Render Inertia Response With Props
		return app.NewInertiaResponse(ctx, "welcome", inertia.Props{
			"version":   support.Version,
			"svelte":    "^5.43.0",
			"inertiajs": "^2.2.14",
			"json": map[string]any{
				"name": "John Doe",
				"age":  22,
			},
		})
	})
}
