import { AnimatePresence, motion } from "motion/react";

import "./infoPopup.css";
function InfoPopup({ card, onClose }) {
  return (
    <AnimatePresence>
      {card && (
        <motion.div
          className="popup-overlay"
          
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="back-popup">
            <motion.div
              className="popup"
              style={{ background: card.cardBg }}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-title">
                <div className="frame-img" style={{ background: card.bg }}>
                  <img src={card.image} alt={card.title} />
                </div>
                <motion.h3 layoutId={`title-${card.id}`}>
                  {card.title}
                </motion.h3>
              </div>
              <div className="popup-description">
                <p>{card.fullDescription}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default InfoPopup;
