import React, { useState, useEffect } from "react";
import LandingLayout from "../../../../components/layout/LandingLayout";
import JobCard from "../../../../components/specific/JobCard";
import JobDetail from "../../../../components/specific/JobDetail";
import Pagination from "../../../../components/common/Pagination";

const Job = () => {
  const [jobs, setJobs] = useState([]); // State untuk menyimpan data job dari API
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  // Fungsi untuk mengambil data dari API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:8000/jobs/", {
          headers: { accept: "application/json" },
        });
        const data = await response.json();
        setJobs(data); // Simpan data ke state
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  // Hitung jumlah halaman total
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  // Filter data untuk halaman saat ini
  const currentJobs = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  // Fungsi untuk menangani perubahan halaman
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
                className="bg-white text-primary w-[50vh] p-2 rounded outline-none"
                placeholder="Posisi atau perusahaan"
              />
              <input
                type="text"
                className="bg-white text-primary w-[30vh] p-2 rounded outline-none"
                placeholder="Lokasi"
              />
              <button className="bg-accents p-2 rounded-lg text-primary text-sm">
                Cari
              </button>
            </div>
          </div>
        </div>

        {/* Tampilkan data job */}
        <div className="p-10 grid lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.role} // Gunakan properti dari respons API
              company={`Employer ID: ${job.employer_id}`}
              location={job.location}
              salary={`Rp. ${job.salary}`}
              description={`Open date: ${job.open_date}, Close date: ${job.close_date}`}
              onDetailClick={() => setSelectedJob(job)}
            />
          ))}
        </div>

        {/* Tampilkan detail job jika ada */}
        {selectedJob && (
          <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}

        {/* Pagination */}
        <div className="flex items-center justify-between p-4">
          <div className="p-4 text-center">
            <p className="text-sm text-gray-600">
              Showing {currentPage} of {totalPages} pages
            </p>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </LandingLayout>
    </>
  );
};

export default Job;
