import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const dashboardData = () => {
  return useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await axios.get(
        `https://lifelineit-back.onrender.com/api/dashboard`,
        {
          withCredentials: true,
        }
      );
      return res.data;
    },
  });
};
