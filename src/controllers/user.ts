import { Router } from "express";

// Handles requests made to /api/users
const usersRouter = Router();

// Respond to a GET request to the /api/users route:
usersRouter.get("/", (req, res) =>
  res.send({
    data: [
      {
        type: "users",
        id: "2",
        attributes: {
          created_at: "2018-09-17T12:46:47+01:00",
          updated_at: "2018-09-17T12:46:47+01:00",
          email: "james@firefly-iii.org",
          blocked: false,
          blocked_code: "email_changed",
          role: "owner",
        },
        links: {
          "0": {
            rel: "self",
            uri: "/OBJECTS/1",
          },
          self: "https://demo.firefly-iii.org/api/v1/OBJECTS/1",
        },
      },
    ],
    meta: {
      pagination: {
        total: 3,
        count: 20,
        per_page: 100,
        current_page: 1,
        total_pages: 1,
      },
    },
    links: {
      self: "https://demo.firefly-iii.org/api/v1/OBJECT?&page=4",
      first: "https://demo.firefly-iii.org/api/v1/OBJECT?&page=1",
      last: "https://demo.firefly-iii.org/api/v1/OBJECT?&page=12",
    },
  })
);

// Respond to a POST request to the /api/users route:
usersRouter.post("/", (req, res) =>
  res.send({
    data: {
      type: "users",
      id: "2",
      attributes: {
        created_at: "2018-09-17T12:46:47+01:00",
        updated_at: "2018-09-17T12:46:47+01:00",
        email: "james@firefly-iii.org",
        blocked: false,
        blocked_code: "email_changed",
        role: "owner",
      },
      links: {
        "0": {
          rel: "self",
          uri: "/OBJECTS/1",
        },
        self: "https://demo.firefly-iii.org/api/v1/OBJECTS/1",
      },
    },
  })
);

// Respond to a PUT request to the /api/users route:
usersRouter.put("/", (req, res) => res.send("Got a PUT request at /api/users"));

// Respond to a DELETE request to the /api/users route:
usersRouter.delete("/", (req, res) =>
  res.send("Got a DELETE request at /api/users")
);

export default usersRouter;
