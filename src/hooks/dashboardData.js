import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const dashboardData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/dashboard`,
        { withCredentials: true }
      )
      return res.data
    },
    onError: (error) => {
      console.error("Dashboard API Error:", error)
    },
  })
}
