import React from 'react'

const JobDetail = ({ job, onClose}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[50vh]">
        <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
        <p><strong>Perusahaan:</strong> {job.company}</p>
        <p><strong>Lokasi:</strong> {job.location}</p>
        <p><strong>Gaji:</strong> {job.salary}</p>
        <p><strong>Deskripsi:</strong> {job.description}</p>
        <button className="mt-4 btn-accent" onClick={onClose}>Tutup</button>
      </div>
    </div>
  )
}

export default JobDetail