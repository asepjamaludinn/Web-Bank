import { useState, useRef } from "react";
import { X, Instagram, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollVelocity from "./effect/scroll-velocity";
import { teamMembers } from "../data";

export default function OurTeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const containerRef = useRef(null);
  const [velocity, setVelocity] = useState(40);

  // Function to open modal with member details
  const openMemberDetails = (member: TeamMember) => {
    setSelectedMember(member);
  };

  // Function to close modal
  const closeMemberDetails = () => {
    setSelectedMember(null);
  };

  // Card variants for animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Modal variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  // Backdrop variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-gray-950 ">
      <div className="w-full overflow-hidden mb-16">
        <ScrollVelocity
          texts={[
            "Trusted Financial Partner • Secure Transactions • Smart Banking Solutions • ",
            "Easy Loans • Competitive Interest Rates • Reliable Investment Plans • ",
          ]}
          velocity={velocity}
          className="text-blue-500 dark:text-blue-400 px-4"
          parallaxClassName="py-2 bg-white dark:bg-black"
        />
      </div>

      {/* Main content - constrained width */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            className="inline-block px-4 py-1 mb-4 text-sm font-medium 
        bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 
        rounded-full transition-all hover:bg-blue-200 dark:hover:bg-blue-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 10px rgba(0, 0, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Our Team
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ fontFamily: "Cabinet Grotesk" }}
          >
            Meet Our Experts
          </motion.h2>

          <motion.p
            className="max-w-xl text-center text-gray-700 dark:text-gray-300 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Get to know our talented team members who work together to deliver
            exceptional results. Click on a team member to view their detailed
            information.
          </motion.p>

          {/* Team member cards - fixed grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer group border border-gray-100 dark:border-gray-700"
                onClick={() => openMemberDetails(member)}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={i}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10" />
                  <motion.img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <p className="text-sm font-medium">Click to view profile</p>
                  </motion.div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    NIM: {member.nim}
                  </p>

                  <div className="mt-3 flex justify-center space-x-4">
                    <motion.a
                      href={`mailto:${member.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail size={16} />
                    </motion.a>
                    <motion.a
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram
                        size={16}
                        strokeWidth={1.5}
                        className="text-current"
                      />
                    </motion.a>

                    <motion.a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for member details */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeMemberDetails}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative pointer-events-auto"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.8 },
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={closeMemberDetails}
                  className="absolute top-3 right-3 text-white bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-1 z-10 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                <div className="relative h-56 bg-white/10 dark:bg-black/30 backdrop-blur-lg">
                  <img
                    src={selectedMember.image || "/placeholder.svg"}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover rounded-t-xl shadow-lg"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <motion.h3
                      className="text-3xl font-bold text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedMember.name}
                    </motion.h3>
                    <motion.p
                      className="text-white opacity-90 text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedMember.role}
                    </motion.p>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                  <div className="mb-6">
                    <motion.p
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {selectedMember.bio}
                    </motion.p>
                  </div>

                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.skills.map((skill, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 
        text-blue-600 dark:text-blue-300 rounded-full text-sm transition-all"
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 4px 8px rgba(0, 0, 255, 0.2)",
                            backgroundColor: "#bfdbfe",
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      Student ID (NIM)
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {selectedMember.nim}
                    </p>
                  </motion.div>

                  <motion.div
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      Email
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {selectedMember.email}
                    </p>
                  </motion.div>

                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                      Connect
                    </h4>
                    <div className="flex items-center mt-2 space-x-4">
                      <motion.a
                        href={`mailto:${selectedMember.email}`}
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail size={18} className="mr-2" />
                        <span>Email</span>
                      </motion.a>
                      <motion.a
                        href={`https://instagram.com/${selectedMember.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Instagram size={18} className="mr-2" />
                        <span>Instagram</span>
                      </motion.a>
                      <motion.a
                        href={`https://linkedin.com/in/${selectedMember.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin size={18} className="mr-2" />
                        <span>LinkedIn</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
