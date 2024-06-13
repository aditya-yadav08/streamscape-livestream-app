"use server";

export const onFollow = async (id: string) => {
    try {
        console.log("API Call", id); 
    } catch (error){
        throw new Error("Internal Error");
    }
}