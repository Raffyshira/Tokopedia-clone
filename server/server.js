const express = require("express");
const supabase = require("@supabase/supabase-js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
    );
    next();
});

const PORT = 4173;

const SUPABASE_URL = "https://fencgdeyawhgscbgmhyz.supabase.co";
const SUPABASE_SERVICE_ROLE =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlbmNnZGV5YXdoZ3NjYmdtaHl6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjEzMjcyMiwiZXhwIjoyMDI3NzA4NzIyfQ.SnSha-vDcWWCcgEW7bG3bhzNOWJ84AoWaKMINT_wHrg";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/v1/api/product", async (request, response, next) => {
    const getRafi = await db.from("rafi").select();
    response.json({ getRafi });
});

app.post("/v1/api/product", async (request, response, next) => {
    const {
        name_product,
        image_product,
        description,
        price_product,
        brand,
        category,
        stock,
        rating,
        discount,
        sale,
        lokasi
    } = request.body;
    const createPost = await db.from("rafi").insert({
        name_product,
        image_product,
        description,
        price_product,
        brand,
        category,
        stock,
        rating,
        discount,
        sale,
        lokasi
    });
    console.log("createPost:", createPost);
    response.json(createPost);
});


app.listen(PORT, () => {
    console.log("Server runnin on port:", PORT);
});
