import React, { useState } from "react";
import LandingLayout from "../../../../components/layout/LandingLayout";
import JobCard from "../../../../components/specific/JobCard";
import JobDetail from "../../../../components/specific/JobDetail";
import Pagination from "../../../../components/common/Pagination"; // Import Pagination

const Job = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Tambahkan state untuk currentPage

  const totalEntries = 8; // Total entries adalah 8
  const jobList = [
    {
      id: 1,
      title: "Android Developer",
      company: "Pable Inc.",
      location: "Bandung, Jawa Barat",
      salary: "Rp. 10.000.000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus, felis non sagittis feugiat, ex odio iaculis nulla, et lobortis quam ligula in sapien. Fusce dictum nisi vitae urna rhoncus laoreet. Quisque consequat nisl non risus rhoncus, eget sollicitudin ligula mattis. Maecenas vehicula cursus tincidunt. Mauris tempus nunc vel massa sagittis, sit amet condimentum lacus molestie. Fusce scelerisque bibendum ullamcorper. Praesent tristique ultricies arcu non tincidunt. Vivamus ac massa sapien. Vestibulum consequat consectetur nisi, sed vestibulum justo mattis vitae. Phasellus eget aliquam lacus, eget lobortis arcu. Aenean quis arcu ac neque rhoncus consequat vel convallis est. Integer ac tempor dui. Nullam viverra nisl molestie, vehicula nulla sit amet, condimentum neque. Vivamus at finibus mi, vel sodales libero. Nunc vel ornare sem, ac malesuada neque. Vivamus quis convallis nisl. In hac habitasse platea dictumst. Nam quis magna varius, sagittis elit id, dictum metus. Praesent porta tincidunt dui vitae aliquam. Nam imperdiet orci erat, ut hendrerit tortor consequat ut.",
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
    {
      id: 4,
      title: "UX Designer",
      company: "CreativeHub",
      location: "Jakarta, DKI Jakarta",
      salary: "Rp. 10.500.000",
      description: "Bertanggung jawab atas desain UX produk ...",
    },
    {
      id: 5,
      title: "Data Analyst",
      company: "DataMinds",
      location: "Depok, Jawa Barat",
      salary: "Rp. 12.000.000",
      description: "Mengolah data untuk menghasilkan insight ...",
    },
    {
      id: 6,
      title: "Software Engineer",
      company: "TechSolution",
      location: "Jakarta, DKI Jakarta",
      salary: "Rp. 15.000.000",
      description: "Membangun aplikasi web yang berkualitas ...",
    },
    {
      id: 7,
      title: "Project Manager",
      company: "SoftServe",
      location: "Bandung, Jawa Barat",
      salary: "Rp. 20.000.000",
      description: "Mengelola proyek pengembangan perangkat lunak ...",
    },
    {
      id: 8,
      title: "IT Support",
      company: "HelpDesk",
      location: "Surabaya, Jawa Timur",
      salary: "Rp. 8.000.000",
      description: "Menyediakan dukungan teknis kepada pengguna ...",
    },
  ];

  const jobsPerPage = 2;
  const totalPages = totalEntries;

  // Filter data untuk halaman saat ini
  const currentJobs = jobList.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

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

        <div className="p-10 grid lg:grid-cols-2 gap-6">
          {currentJobs.map((job) => (
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

        <div className="flex items-center justify-between p-4">
          <div className="p-4 text-center">
            <p className="text-sm text-gray-600">
              Showing {currentPage} of {totalEntries} entries
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
