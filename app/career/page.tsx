'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const jobs = [
	{
		title: 'Software Engineer',
		type: 'Full-time',
		location: 'Remote',
		description: 'Work on cutting-edge EV solutions and platforms.',
		requirements: [
			'3+ years experience in software development',
			'Experience with React/Next.js',
			'Strong problem-solving skills',
		],
	},
	{
		title: 'Product Designer',
		type: 'Full-time',
		location: 'On-site',
		description: 'Design intuitive interfaces for our products.',
		requirements: [
			'2+ years experience in product design',
			'Proficiency in Figma/Sketch',
			'Portfolio of design work',
		],
	},
	{
		title: 'Marketing Specialist',
		type: 'Part-time',
		location: 'Remote',
		description: 'Drive brand awareness and digital campaigns.',
		requirements: [
			'Experience in digital marketing',
			'Strong communication skills',
			'Knowledge of SEO/SEM',
		],
	},
	// Add more job objects as needed
];

const locations = ['All', ...Array.from(new Set(jobs.map((j) => j.location)))];
const types = ['All', ...Array.from(new Set(jobs.map((j) => j.type)))];

export default function CareerPage() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		position: '',
		message: '',
		resume: null,
	});
	const [submitted, setSubmitted] = useState(false);
	const [modalJob, setModalJob] = useState(null);
	const [search, setSearch] = useState('');
	const [filterLocation, setFilterLocation] = useState('All');
	const [filterType, setFilterType] = useState('All');
	const [toast, setToast] = useState('');

	// Filter jobs
	const filteredJobs = jobs.filter((job) =>
		(filterLocation === 'All' || job.location === filterLocation) &&
		(filterType === 'All' || job.type === filterType) &&
		(job.title.toLowerCase().includes(search.toLowerCase()) ||
			job.description.toLowerCase().includes(search.toLowerCase()))
	);

	// Form handlers
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (e.target.name === 'resume') {
			setForm({ ...form, resume: e.target.files?.[0] || null });
		} else {
			setForm({ ...form, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		setToast('Application submitted!');
		setTimeout(() => setSubmitted(false), 4000);
		setTimeout(() => setToast(''), 4000);
		setForm({ name: '', email: '', position: modalJob?.title || '', message: '', resume: null });
	};

	return (
		<div className="pt-20">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-brand-500 to-brand-400 text-white py-20 overflow-hidden">
				<img
					src="/images/career-hero.jpg"
					alt=""
					className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
				/>
				<div className="container-custom relative z-10 text-center">
					<motion.h1
						className="text-4xl md:text-5xl font-bold mb-4"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						Join Our Team at Enertrics Power
					</motion.h1>
					<motion.p
						className="text-xl opacity-90 max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
					>
						Help us shape the future of electric mobility. Explore our open positions and apply today!
					</motion.p>
				</div>
			</section>

			{/* Search & Filter */}
			<section className="bg-white py-8">
				<div className="container-custom flex flex-wrap gap-4 justify-center items-center">
					<input
						aria-label="Search jobs"
						type="text"
						placeholder="Search jobs..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="px-4 py-2 border rounded-lg"
					/>
					<select
						aria-label="Filter by location"
						value={filterLocation}
						onChange={(e) => setFilterLocation(e.target.value)}
						className="px-4 py-2 border rounded-lg"
					>
						{locations.map((loc) => (
							<option key={loc} value={loc}>{loc}</option>
						))}
					</select>
					<select
						aria-label="Filter by type"
						value={filterType}
						onChange={(e) => setFilterType(e.target.value)}
						className="px-4 py-2 border rounded-lg"
					>
						{types.map((type) => (
							<option key={type} value={type}>{type}</option>
						))}
					</select>
				</div>
			</section>

			{/* Open Positions */}
			<section className="section-padding bg-white">
				<div className="container-custom">
					<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredJobs.map((job, idx) => (
							<motion.div
								key={idx}
								className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition"
								whileHover={{ scale: 1.03 }}
								tabIndex={0}
								aria-label={`View details for ${job.title}`}
								onClick={() => setModalJob(job)}
								onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setModalJob(job)}
								role="button"
							>
								<div className="flex items-center gap-3 mb-2">
									<span className="inline-block bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
										{job.location}
									</span>
									<span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
										{job.type}
									</span>
								</div>
								<h3 className="text-xl font-semibold mb-1">{job.title}</h3>
								<p className="text-gray-600 mb-2">{job.description}</p>
								<button
									className="text-brand-500 font-semibold hover:underline mt-2"
									type="button"
									aria-label={`Apply for ${job.title}`}
									onClick={(e) => {
										e.stopPropagation();
										setModalJob(job);
									}}
								>
									Apply Now
								</button>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Job Details Modal */}
			<AnimatePresence>
				{modalJob && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setModalJob(null)}
						aria-modal="true"
						role="dialog"
					>
						<motion.div
							className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full relative max-h-[80vh] overflow-y-auto"
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className="absolute top-4 right-4 text-gray-500 hover:text-brand-500 text-2xl"
								onClick={() => setModalJob(null)}
								aria-label="Close modal"
							>
								&times;
							</button>
							<h2 className="text-2xl font-bold mb-2">{modalJob.title}</h2>
							<div className="flex gap-2 mb-2">
								<span className="bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{modalJob.location}</span>
								<span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">{modalJob.type}</span>
							</div>
							<p className="text-gray-700 mb-4">{modalJob.description}</p>
							<h3 className="font-semibold mb-2">Requirements:</h3>
							<ul className="list-disc list-inside text-gray-600 mb-4">
								{modalJob.requirements.map((req, i) => (
									<li key={i}>{req}</li>
								))}
							</ul>
							{/* Application Form in Modal */}
							<form className="space-y-4" onSubmit={handleSubmit}>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={form.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border rounded-lg"
									aria-label="Your Name"
								/>
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={form.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border rounded-lg"
									aria-label="Your Email"
								/>
								<input
									type="text"
									name="position"
									placeholder="Position Interested In"
									value={modalJob.title}
									readOnly
									className="w-full px-4 py-3 border rounded-lg bg-gray-100"
									aria-label="Position Interested In"
								/>
								<textarea
									name="message"
									placeholder="Tell us about yourself"
									value={form.message}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border rounded-lg"
									rows={4}
									aria-label="Tell us about yourself"
								/>
								<input
									type="file"
									name="resume"
									accept=".pdf,.doc,.docx"
									onChange={handleChange}
									className="w-full px-4 py-3 border rounded-lg"
									aria-label="Upload Resume"
								/>
								<button type="submit" className="btn-primary w-full">
									Submit Application
								</button>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Toast for Success/Error Feedback */}
			<AnimatePresence>
				{toast && (
					<motion.div
						className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 30 }}
						role="status"
						aria-live="polite"
					>
						{toast}
					</motion.div>
				)}
			</AnimatePresence>

			{/* Company Perks */}
			<section className="py-16 bg-gray-50">
				<div className="container-custom text-center">
					<h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
					<div className="flex flex-wrap justify-center gap-8">
						<div className="bg-white rounded-xl shadow p-6 w-64">
							<span className="text-3xl mb-2 inline-block">🚀</span>
							<h4 className="font-semibold mb-1">Innovative Projects</h4>
							<p className="text-gray-600 text-sm">Work on industry-leading EV technology.</p>
						</div>
						<div className="bg-white rounded-xl shadow p-6 w-64">
							<span className="text-3xl mb-2 inline-block">🌎</span>
							<h4 className="font-semibold mb-1">Global Impact</h4>
							<p className="text-gray-600 text-sm">Shape the future of sustainable mobility.</p>
						</div>
						<div className="bg-white rounded-xl shadow p-6 w-64">
							<span className="text-3xl mb-2 inline-block">💡</span>
							<h4 className="font-semibold mb-1">Growth Culture</h4>
							<p className="text-gray-600 text-sm">Learn, grow, and advance your career.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Company Culture Section */}
			<section className="py-16 bg-white">
				<div className="container-custom text-center">
					<h2 className="text-2xl font-bold mb-6">Life at Enertrics Power</h2>
					<div className="flex flex-wrap justify-center gap-8 mb-8">
						<div className="bg-gray-50 rounded-xl shadow p-6 w-80">
							<p className="italic text-gray-700 mb-2">
								"Enertrics Power is a place where innovation thrives and every voice matters."
							</p>
							<span className="font-semibold text-brand-500">— Dr. Sarah Chen, CEO</span>
						</div>
						<div className="bg-gray-50 rounded-xl shadow p-6 w-80">
							<p className="italic text-gray-700 mb-2">
								"I love the collaborative culture and the opportunity to work on impactful projects."
							</p>
							<span className="font-semibold text-brand-500">— Jennifer Park, COO</span>
						</div>
					</div>
					<img
						src="/images/team-photo.jpg"
						alt="Enertrics Power Team"
						className="mx-auto rounded-2xl shadow-lg w-full max-w-2xl object-cover"
					/>
				</div>
			</section>
		</div>
	);
}