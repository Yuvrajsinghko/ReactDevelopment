import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi";
import ResultCard from "./ResultCard";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.regular,
              url: item.links.html,
            }));
            
            
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGIFs(query);
            data = response.results.map((item) => ({
              id: item.id,
              title: item.title || "GIF",
              thumbnail: item.media_formats.tinygif.url,
              type: "gif",
              src: item.media_formats.gif.url,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch]
  );
  if (error) return <h1>Error</h1>;

  if (loading) return <div>...</div>;

  return (
    <div className="flex justify-center w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <h1 key={idx}>
            <ResultCard item={item} />
          </h1>
        );
      })}
    </div>
  );
};

export default ResultGrid;
