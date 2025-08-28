import React from 'react';
import { motion, useInView, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { stats as hardcodedStats, projects } from '../data'; // Import projects data

const AnimatedNumber = ({ value }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { mass: 0.8, stiffness: 100, damping: 15 });
  const displayValue = useTransform(spring, (latest) => Math.round(latest).toLocaleString());

  React.useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Stats = () => {
  // Calculate dynamic stats
  const totalRaised = projects.reduce((sum, project) => sum + project.raised, 0);
  const projectsFunded = projects.filter(project => project.raised >= project.goal).length;

  // Create a new stats array with updated values
  const dynamicStats = hardcodedStats.map(stat => {
    if (stat.label === 'Dons Collectés (€)') {
      return { ...stat, value: totalRaised };
    } else if (stat.label === 'Projets Financés') {
      return { ...stat, value: projectsFunded };
    }
    return stat;
  });

  return (
    <div className="py-20 bg-green-500">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-50">Notre Impact en lettre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {dynamicStats.map(stat => (
            <div key={stat.id} className="p-6 bg-white backdrop-blur-md border border-white/30 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-5xl font-extrabold text-secondary">
                <AnimatedNumber value={stat.value} />
              </p>
              <p className="text-text-primary mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
