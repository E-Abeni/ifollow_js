"use server"

import { revalidatePath } from "next/cache"

export default async function reval(path){
    revalidatePath(path)
}
