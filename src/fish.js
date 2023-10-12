import { db } from "./connectDb.js";

const theFish = {
    species: 'tetra',
    origin: 'amazon',
    color: 'sliver',
    size: '1"',
};

// Add a fish
export async function addAFish(){
    await db.collection('fish').insertOne(theFish);
}

// get all fishies
export async function getAllFish(){
    const fishList = await db.collection('fish').find({}).toArray();
    console.table(fishList);
}