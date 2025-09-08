'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, User } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  linkedin?: string;
  twitter?: string; 
  department: string;
}

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="card group text-center"
    >
      {/* Member Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
          <User className="w-16 h-16 text-gray-400" />
        </div>
        
        {/* Social Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-500 text-white rounded-full flex items-center justify-center hover:bg-brand-700 transition-colors"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label={`${member.name} Twitter`}
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            <a
              href={`mailto:${member.email}`}
              className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Member Info */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {member.name}
        </h3>
        <p className="text-brand-500 font-medium mb-3">
          {member.title}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {member.bio}
        </p>
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
          {member.department}
        </span>
      </div>
    </motion.div>
  );
}
