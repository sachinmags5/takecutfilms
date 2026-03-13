import { useEffect, useState } from "react";
import API from "../../services/api";

function NewsPage() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await API.get("/news");
    setNews(res.data);
  };

  return (
    <div className="p-10 max-w-6xl mx-auto">

      <h1 className="text-4xl mb-8">Latest News</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {news.map((item) => (

          <div
            key={item._id}
            className="bg-gray-900 p-5 rounded-lg"
          >

            <img
              src={(item.image) ? item.image : '/voyage-pro-hRZhwtLEDfQ-unsplash.jpg' }
              className="rounded mb-4"
            />

            <h3 className="text-xl mb-2">{item.title}</h3>

            <p className="text-gray-400">
            {item.content.slice(0,120)}...
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NewsPage;