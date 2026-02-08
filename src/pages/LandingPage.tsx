import {Globe, Leaf, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Footer } from "../components/Footer";

// Main Landing Page Component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                L'avenir est
                <span className="text-green-600"> vert</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Découvrez des solutions technologiques innovantes pour un monde
                plus durable. GreenTech vous accompagne dans votre transition
                écologique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all hover:shadow-lg"
                >
                  Commencer gratuitement
                </button>
                <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all border border-gray-200">
                  En savoir plus
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <Zap className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Rapide</h3>
                    <p className="text-xs text-gray-600">Déploiement en 24h</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <Shield className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Sécurisé
                    </h3>
                    <p className="text-xs text-gray-600">Données protégées</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <Globe className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Global</h3>
                    <p className="text-xs text-gray-600">50+ pays</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Évolutif
                    </h3>
                    <p className="text-xs text-gray-600">Croissance garantie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos fonctionnalités
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des outils puissants pour transformer votre approche
              environnementale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Analyse écologique
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Mesurez et optimisez votre empreinte carbone avec nos outils
                d'analyse avancés.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Travaillez en équipe sur vos projets environnementaux avec des
                outils collaboratifs.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reporting
              </h3>
              <p className="text-gray-600 leading-relaxed flex-grow">
                Générez des rapports détaillés et suivez vos progrès en temps
                réel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-green-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white mb-2">10k+</div>
              <div className="text-green-100">Utilisateurs actifs</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100">Pays couverts</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-green-100">Satisfaction client</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">Support disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir GreenTech ?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depuis 2020, nous aidons les entreprises à réduire leur impact
                environnemental grâce à des solutions technologiques innovantes
                et accessibles.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Expertise reconnue
                    </h4>
                    <p className="text-sm text-gray-600">
                      Plus de 5 ans d'expérience dans le secteur
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Innovation constante
                    </h4>
                    <p className="text-sm text-gray-600">
                      Nouvelles fonctionnalités chaque mois
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Support dédié
                    </h4>
                    <p className="text-sm text-gray-600">
                      Équipe disponible 24/7 pour vous aider
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900">Mission</h4>
                    <p className="text-sm text-gray-600">
                      Rendre la technologie verte accessible à tous
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900">Vision</h4>
                    <p className="text-sm text-gray-600">
                      Un monde plus durable grâce à la technologie
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-semibold text-gray-900">Valeurs</h4>
                    <p className="text-sm text-gray-600">
                      Innovation, transparence et engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-r from-green-600 to-blue-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à commencer votre transition écologique ?
          </h2>
          <p className="text-xl text-green-50 mb-8">
            Rejoignez des milliers d'entreprises qui font confiance à GreenTech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              Essai gratuit 30 jours
            </button>
            <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all border-2 border-white">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;