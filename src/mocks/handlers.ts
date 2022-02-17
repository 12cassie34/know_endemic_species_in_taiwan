import { rest } from 'msw';

import menu from "./menu.json";

export default [
    rest.get('/getMenu', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(menu)
        )
    })
]