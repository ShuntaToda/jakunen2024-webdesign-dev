import { Field } from "../types/field"
import { host } from "./host"

export const fetchField = async (): Promise<Field> => {
  const res = await fetch(`${host}/field`, {
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()
  return data.field
  
}