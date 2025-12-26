// src/components/AboutSection.jsx
import React from 'react';
import { FiUser, FiTool, FiBriefcase, FiX } from 'react-icons/fi';
import styles from './AboutSection.module.css';
import { portfolioData, ITEM_TYPES } from '../data/source';

const AboutSection = ({ onClose }) => {
  const skills = portfolioData.filter(item => item.type === ITEM_TYPES.SKILL);
  const experiences = portfolioData.filter(item => item.type === ITEM_TYPES.BIO);

  return (
    <section className={styles.aboutSection} id="sobre">
      <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
        <FiX size={24} />
      </button>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <FiUser className={styles.icon} size={32} />
            <h1 className={styles.mainTitle}>Sobre Mim</h1>
          </div>
          <p className={styles.mainSubtitle}>
            Tenho pós-graduação em Engenharia de Software com ênfase em Testes e mais de 15 anos de experiência na área de Tecnologia da Informação (TI).
          </p>
        </div>

        {/* Experience Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FiBriefcase size={24} />
            <h2 className={styles.sectionTitle}>Trajetória Profissional</h2>
          </div>
          <div className={styles.timeline}>
            {experiences.map((exp) => (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.experienceCard}>
                  <h3 className={styles.expTitle}>{exp.title}</h3>
                  <p className={styles.expDescription}>{exp.description}</p>
                  {exp.tags && exp.tags.length > 0 && (
                    <div className={styles.tags}>
                      {exp.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

                {/* Skills Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FiTool size={24} />
            <h2 className={styles.sectionTitle}>Competências Técnicas</h2>
          </div>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.id} className={styles.skillCard}>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
                <p className={styles.skillDescription}>{skill.description}</p>
                {skill.tags && skill.tags.length > 0 && (
                  <div className={styles.tags}>
                    {skill.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
