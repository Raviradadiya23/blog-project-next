import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, messege } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !messege ||
      messege.trim() === ""
    ) {
      res.status(422).json({ messege: "Invalid Input" });
      return;
    }
    const newMessege = {
      email,
      name,
      messege,
    };
    console.log(newMessege);
    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://ravi:ravi@cluster0.cn5wq.mongodb.net/next-demo-project?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ messege: "Database connection failed" });
      return;
    }

    const db = client.db();
    try {
      const result = await db.collection("messeges").insertOne(newMessege);
    } catch (error) {
      res.status(500).json({ messege: "error in inserting data" });
      return;
    }
    res
      .status(201)
      .json({ messege: "data saved successfully", data: newMessege });
  }
}
