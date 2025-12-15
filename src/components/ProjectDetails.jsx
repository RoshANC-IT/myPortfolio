import { motion } from "framer-motion"; // Correct import for motion
// Make sure you installed: npm install framer-motion

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const dropBox=(e)=>{
   if(e.target==e.currentTarget) return  closeModal()
  }
  return (
    <div onClick={dropBox} className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" alt="close" className="w-6 h-6" />
        </button>

        {/* Project Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-2xl"
        />

        {/* Project Content */}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {/* Sub-descriptions */}
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          {/* Tags & Link */}
          <div className="flex items-center justify-between mt-4">
            {/* Tech Tags */}
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="rounded-lg size-10 hover:scale-110 transition-transform"
                />
              ))}
            </div>

            {/* Live Project Link */}
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white cursor-pointer hover:underline"
              >
                View Project
                <img
                  src="assets/arrow-up.svg"
                  className="size-4"
                  alt="arrow"
                />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
