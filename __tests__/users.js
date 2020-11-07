const { default: expectCt } = require("helmet/dist/middlewares/expect-ct")
const supertest = require("supertest")
const server = require("../api/server")
const db = require("../database/dbConfig")

beforeAll(async () => {
  await db("users").truncate()  
})

afterAll(async () => {
    await db.destroy()
})

describe("users integration tests", () => {
    it("registers a new user", async () => {
        const res = await supertest(server)
            .post("/register")
            .send({ username: "Steve", password: "Goodrick" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
       
    })
})