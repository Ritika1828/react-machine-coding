import React from "react";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import { apiUtility } from "./apiUtility";

function JobBoard(props) {
  const [jobIds, setJobIds] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  console.log("jobId", jobData);
  useEffect(() => {
    const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";

    apiUtility({ url })
      .then((data) => {
        setJobIds(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    async function getJobs() {
      setLoading(true);
      const ids = jobIds.slice(count * 6, 6 * (count + 1));

      //   setJobIds((prev) => prev.slice(0, 6));
      console.log("jobss", ids, jobIds);
      const promise = ids.map((id) => {
        return apiUtility({
          url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        });
      });
      const job = Promise.all(promise).then((job) => {
        setJobData((prev) => [...prev, ...job]);
        setLoading(false);
      });

      //   const promise = ids.map((id) => {
      //     return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      //   });
      //   const res = await Promise.all(promise);
      //   const data= await Promise.all
    }

    getJobs();
  }, [jobIds, count]);

  console.log("loading", loading);
  return (
    <div style={{ backgroundColor: "#faebd7" }}>
      <h3> Hacker News Job Board</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
        }}
      >
        {jobData.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            person={job.by}
            url={job.url}
            time={job.time}
          />
        ))}
      </div>
      <button disabled={loading} onClick={() => setCount((prev) => prev + 1)}>
        {loading ? "wait" : "Load more jobs"}
      </button>
    </div>
  );
}

export default JobBoard;
