import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "React" },
        { name: "Node.js" },
        { name: "TypeScript" },
        { name: "Python" },
        { name: "Java" },
        { name: "C++" },
        { name: "Go" },
    ]);
};
