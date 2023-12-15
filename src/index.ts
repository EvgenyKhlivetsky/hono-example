import { Hono } from 'hono'
import {One} from "./pages/one";
import {Two} from "./pages/two";
import Default from './pages'

const app = new Hono()

app.get('/', (c) => c.html(Default()))
// comment
app.get('/one', async (c) => {
    const data = await fetch('https://swapi.dev/api/people/1');
    const luke = await data.json();
return c.html(One({text: JSON.stringify(luke, null, 2)}))
}
)

app.get('/two', (c) => c.html(Two({text:'Some text goes here!'})))

export default app
