import { createServer, Model } from "miragejs"
import menu from "./menu.json";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api"

      this.get("/getMenu", () => {
        return menu
      })
    },
  })

  return server
}