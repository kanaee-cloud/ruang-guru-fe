import React, { useState } from "react";
import LandingLayout from "../../../../components/layout/LandingLayout";
import JobCard from "../../../../components/specific/JobCard";
import JobDetail from "../../../../components/specific/JobDetail";

const Job = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobList = [
    {
      id: 1,
      title: "Android Developer",
      company: "Pable Inc.",
      location: "Bandung, Jawa Barat",
      salary: "Rp. 10.000.000",
      description: "Ewok ewok ewok ewok ...",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Tech Solution",
      location: "Jakarta, DKI Jakarta",
      salary: "Rp. 12.000.000",
      description: "Membuat dan mengelola UI/UX aplikasi web ...",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "CodeWorks",
      location: "Surabaya, Jawa Timur",
      salary: "Rp. 15.000.000",
      description: "Membangun dan mengelola API serta server ...",
    },
  ];

  return (
    <>
      <LandingLayout>
        <div className="bg-gradient-home text-white py-8">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-300 p-4 mb-4 rounded-lg">
              <h1 className="text-4xl text-accents font-semibold">
                Ruang<span className="text-primary">Nganggur.</span>
              </h1>
            </div>
            <div className="lg:flex items-center gap-2">
              <input
                type="text"
                className="bg-white text-primary w-[50vh] p-2 rounded outline-none placeholder:tracking-widest placeholder:text-sm text-sm"
                placeholder="Posisi atau perusahaan"
              />
              <input
                type="text"
                className="bg-white text-primary w-[30vh] p-2 rounded outline-none placeholder:tracking-widest placeholder:text-sm text-sm"
                placeholder="Lokasi"
              />
              <button className="bg-accents p-2 rounded-lg text-primary text-sm tracking-widest">
                Cari
              </button>
            </div>
          </div>
        </div>
        <div className="p-10 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {jobList.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              salary={job.salary}
              description={job.description}
              onDetailClick={() => setSelectedJob(job)}
            />
          ))}
        </div>
        {selectedJob && (
          <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </LandingLayout>
    </>
  );
};

export default Job;
