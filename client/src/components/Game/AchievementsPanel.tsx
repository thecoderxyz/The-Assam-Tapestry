import { useEffect, useState } from "react";
import { useAchievements } from "../../lib/stores/useAchievements";

export default function AchievementsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { achievements, loadAchievements } = useAchievements();

  useEffect(() => {
    loadAchievements();
  }, [loadAchievements]);

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const progressPercent = (unlockedCount / totalCount) * 100;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-amber-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-amber-500 transition duration-300 flex items-center gap-2"
      >
        <span>🏆</span>
        <span className="font-semibold">{unlockedCount}/{totalCount}</span>
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 p-6 text-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Achievements</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl hover:scale-110 transition"
                >
                  ✕
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(progressPercent)}% Complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-white h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Achievements List */}
            <div className="overflow-y-auto p-6 space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.unlocked
                      ? 'bg-gray-700 border-amber-500 shadow-lg'
                      : 'bg-gray-900 border-gray-700 opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">
                      {achievement.unlocked ? achievement.icon : '🔒'}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg ${
                        achievement.unlocked ? 'text-amber-400' : 'text-gray-500'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1">
                        {achievement.description}
                      </p>
                      {achievement.unlocked && achievement.unlockedAt && (
                        <p className="text-xs text-amber-500 mt-2">
                          Unlocked: {new Date(achievement.unlockedAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
