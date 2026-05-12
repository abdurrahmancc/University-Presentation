import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShoppingBag,
  Lock,
  CreditCard,
  Database,
  Users,
  Package,
  BarChart3,
  Shield,
  Smartphone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Code2,
  Server,
  Globe,
  TrendingUp,
  Settings,
  Store,
  FileText,
  Target,
  Layers,
  Zap
} from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Title',
    component: TitleSlide
  },
  {
    id: 2,
    title: 'Project Overview',
    component: ProjectOverviewSlide
  },
  {
    id: 3,
    title: 'Objectives',
    component: ObjectivesSlide
  },
  {
    id: 4,
    title: 'Technologies Used',
    component: TechnologiesSlide
  },
  {
    id: 5,
    title: 'Main Features',
    component: FeaturesSlide
  },
  {
    id: 6,
    title: 'Authentication & Security',
    component: AuthSecuritySlide
  },
  {
    id: 7,
    title: 'Payment System',
    component: PaymentSlide
  },
  {
    id: 8,
    title: 'Database Design',
    component: DatabaseSlide
  },
  {
    id: 9,
    title: 'User Dashboard',
    component: UserDashboardSlide
  },
  {
    id: 10,
    title: 'Admin Dashboard',
    component: AdminDashboardSlide
  },
  {
    id: 11,
    title: 'System Architecture',
    component: ArchitectureSlide
  },
  {
    id: 12,
    title: 'Challenges Faced',
    component: ChallengesSlide
  },
  {
    id: 13,
    title: 'Future Improvements',
    component: FutureSlide
  },
  {
    id: 14,
    title: 'Conclusion',
    component: ConclusionSlide
  },
  {
    id: 15,
    title: 'Thank You',
    component: ThankYouSlide
  }
];

function TitleSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-green-50 to-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl"
      >
        <Leaf className="w-12 h-12 text-white" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-6xl mb-3 text-gray-800"
      >
        Fresh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl text-green-600 mb-2"
      >
        React/Redux eCommerce Website
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-gray-600 mb-12"
      >
        Final Year Project Presentation
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl"
      >
        <p className="text-lg mb-4 text-gray-700">Presented By:</p>
        <div className="space-y-2">
          <p className="text-gray-800"><span className="text-green-600">●</span> Md Abdur Rahman (Team Leader)</p>
          <p className="text-gray-800"><span className="text-green-600">●</span> Md. Nayem Uddin</p>
          <p className="text-gray-800"><span className="text-green-600">●</span> Md Anwar Hossain</p>
          <p className="text-gray-800"><span className="text-green-600">●</span> Md Habibur Rahman</p>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-gray-700">Department of CSE</p>
          <p className="text-green-600">Uttara University</p>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectOverviewSlide() {
  const features = [
    { icon: Globe, text: 'Modern responsive eCommerce platform' },
    { icon: Leaf, text: 'Organic food & multipurpose online store' },
    { icon: Lock, text: 'Secure authentication & payment system' },
    { icon: BarChart3, text: 'User & admin dashboard' }
  ];

  return (
    <SlideLayout title="Project Overview" icon={FileText}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100"
          >
            <feature.icon className="w-10 h-10 text-green-600 mb-3" />
            <p className="text-gray-700">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function ObjectivesSlide() {
  const objectives = [
    { icon: Target, text: 'Build modern eCommerce system' },
    { icon: Shield, text: 'Secure authentication' },
    { icon: CreditCard, text: 'Online payment integration' },
    { icon: Smartphone, text: 'Responsive user experience' }
  ];

  return (
    <SlideLayout title="Objectives" icon={Target}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {objectives.map((obj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <obj.icon className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-gray-700 pt-2">{obj.text}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function TechnologiesSlide() {
  return (
    <SlideLayout title="Technologies Used" icon={Code2}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-xl text-white"
        >
          <Globe className="w-10 h-10 mb-4" />
          <h3 className="text-xl mb-4">Frontend</h3>
          <div className="space-y-2">
            <p className="bg-white/20 px-3 py-2 rounded-lg">React</p>
            <p className="bg-white/20 px-3 py-2 rounded-lg">Redux Toolkit</p>
            <p className="bg-white/20 px-3 py-2 rounded-lg">Tailwind CSS</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl shadow-xl text-white"
        >
          <Server className="w-10 h-10 mb-4" />
          <h3 className="text-xl mb-4">Backend</h3>
          <div className="space-y-2">
            <p className="bg-white/20 px-3 py-2 rounded-lg">Node.js</p>
            <p className="bg-white/20 px-3 py-2 rounded-lg">Express.js</p>
            <p className="bg-white/20 px-3 py-2 rounded-lg">MongoDB</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-xl text-white"
        >
          <Zap className="w-10 h-10 mb-4" />
          <h3 className="text-xl mb-4">Other</h3>
          <div className="space-y-2">
            <p className="bg-white/20 px-3 py-2 rounded-lg">Firebase</p>
            <p className="bg-white/20 px-3 py-2 rounded-lg">JWT</p>
            <p className="bg-white/20 px-3 py-2 rounded-lg">Stripe</p>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}

function FeaturesSlide() {
  const features = [
    { icon: Smartphone, text: 'Responsive Design', color: 'from-green-400 to-green-500' },
    { icon: ShoppingBag, text: 'Shopping Cart', color: 'from-blue-400 to-blue-500' },
    { icon: Users, text: 'User Dashboard', color: 'from-purple-400 to-purple-500' },
    { icon: Settings, text: 'Admin Dashboard', color: 'from-orange-400 to-orange-500' },
    { icon: CreditCard, text: 'Stripe Payment', color: 'from-pink-400 to-pink-500' },
    { icon: Package, text: 'Product Management', color: 'from-teal-400 to-teal-500' }
  ];

  return (
    <SlideLayout title="Main Features" icon={Sparkles}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            className={`bg-gradient-to-br ${feature.color} p-6 rounded-xl shadow-lg text-white flex flex-col items-center text-center`}
          >
            <feature.icon className="w-12 h-12 mb-3" />
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function AuthSecuritySlide() {
  const items = [
    { icon: Shield, title: 'Firebase Authentication', desc: 'Secure user authentication' },
    { icon: Lock, title: 'JWT Security', desc: 'Token-based authorization' },
    { icon: CheckCircle2, title: 'Protected Routes', desc: 'Route-level protection' },
    { icon: FileText, title: 'Express Validator', desc: 'Input validation & sanitization' }
  ];

  return (
    <SlideLayout title="Authentication & Security" icon={Shield}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                <item.icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl text-gray-800">{item.title}</h3>
            </div>
            <p className="text-gray-600 ml-[4.5rem]">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function PaymentSlide() {
  return (
    <SlideLayout title="Payment System" icon={CreditCard}>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
        >
          <CreditCard className="w-16 h-16 text-white" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center border border-green-100"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg mb-2 text-gray-800">Stripe Payment Gateway</h3>
            <p className="text-gray-600">Industry-standard payment processing</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center border border-green-100"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg mb-2 text-gray-800">Secure Transactions</h3>
            <p className="text-gray-600">End-to-end encryption</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center border border-green-100"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg mb-2 text-gray-800">Real-time Processing</h3>
            <p className="text-gray-600">Instant payment confirmation</p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}

function DatabaseSlide() {
  const collections = ['Users', 'Products', 'Orders', 'Payments'];

  return (
    <SlideLayout title="Database Design" icon={Database}>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
          className="w-24 h-24 bg-gray-800 rounded-xl flex items-center justify-center mb-8 shadow-xl"
        >
          <Database className="w-12 h-12 text-green-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-700 to-gray-800 px-8 py-4 rounded-full mb-8 shadow-xl"
        >
          <p className="text-white text-2xl">MongoDB</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
              className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-green-500"
            >
              <Layers className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-gray-800">{collection}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

function UserDashboardSlide() {
  const features = [
    { icon: Store, text: 'Browse Products' },
    { icon: ShoppingBag, text: 'Add to Cart' },
    { icon: CheckCircle2, text: 'Place Orders' },
    { icon: FileText, text: 'Order History' }
  ];

  return (
    <SlideLayout title="User Dashboard" icon={Users}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border border-green-200 hover:shadow-2xl transition-shadow"
          >
            <feature.icon className="w-14 h-14 text-green-600 mb-4" />
            <p className="text-xl text-gray-800">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function AdminDashboardSlide() {
  const features = [
    { icon: Package, text: 'Manage Products', color: 'from-blue-500 to-blue-600' },
    { icon: Users, text: 'Manage Users', color: 'from-purple-500 to-purple-600' },
    { icon: FileText, text: 'Manage Orders', color: 'from-orange-500 to-orange-600' },
    { icon: TrendingUp, text: 'Sales Monitoring', color: 'from-green-500 to-green-600' }
  ];

  return (
    <SlideLayout title="Admin Dashboard" icon={Settings}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-gradient-to-br ${feature.color} p-8 rounded-xl shadow-xl text-white`}
          >
            <feature.icon className="w-14 h-14 mb-4" />
            <p className="text-xl">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function ArchitectureSlide() {
  return (
    <SlideLayout title="System Architecture" icon={Layers}>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 px-8 py-6 rounded-xl shadow-xl text-white"
          >
            <Globe className="w-12 h-12 mx-auto mb-2" />
            <p className="text-xl">React Frontend</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl text-green-600"
          >
            →
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-green-500 to-green-600 px-8 py-6 rounded-xl shadow-xl text-white"
          >
            <Server className="w-12 h-12 mx-auto mb-2" />
            <p className="text-xl">Express API</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="text-4xl text-green-600"
          >
            →
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-gray-700 to-gray-800 px-8 py-6 rounded-xl shadow-xl text-white"
          >
            <Database className="w-12 h-12 mx-auto mb-2" />
            <p className="text-xl">MongoDB</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-orange-600" />
              <p className="text-lg text-gray-800">Authentication</p>
            </div>
            <p className="text-gray-600 ml-11">Firebase + JWT</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="w-8 h-8 text-purple-600" />
              <p className="text-lg text-gray-800">Payment</p>
            </div>
            <p className="text-gray-600 ml-11">Stripe</p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}

function ChallengesSlide() {
  const challenges = [
    'Authentication Management',
    'Redux State Management',
    'Payment Integration',
    'API Handling'
  ];

  return (
    <SlideLayout title="Challenges Faced" icon={Target}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500 flex items-center gap-4"
          >
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-orange-600">{index + 1}</span>
            </div>
            <p className="text-gray-800">{challenge}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function FutureSlide() {
  const improvements = [
    { icon: Sparkles, text: 'AI Recommendations', color: 'from-purple-500 to-purple-600' },
    { icon: Smartphone, text: 'Mobile App', color: 'from-blue-500 to-blue-600' },
    { icon: MessageSquare, text: 'Live Chat', color: 'from-green-500 to-green-600' },
    { icon: Store, text: 'Multi-vendor Support', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <SlideLayout title="Future Improvements" icon={TrendingUp}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {improvements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            className={`bg-gradient-to-br ${item.color} p-8 rounded-xl shadow-xl text-white flex items-center gap-4`}
          >
            <item.icon className="w-12 h-12" />
            <p className="text-xl">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}

function ConclusionSlide() {
  const points = [
    'Full-stack MERN eCommerce solution',
    'Secure & responsive platform',
    'Practical industry-level development experience'
  ];

  return (
    <SlideLayout title="Conclusion" icon={CheckCircle2}>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>

        <div className="space-y-4 w-full max-w-3xl">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex items-center gap-4"
            >
              <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
              <p className="text-xl text-gray-800">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

function ThankYouSlide() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-green-50 via-white to-green-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
        className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-8 shadow-2xl"
      >
        <Leaf className="w-16 h-16 text-white" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-6xl mb-4 text-gray-800"
      >
        Thank You!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-3xl text-green-600 mb-12"
      >
        Questions & Answers
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        <p className="text-xl text-gray-700 mb-4">Fresh - MERN eCommerce Platform</p>
        <p className="text-gray-600">Department of CSE, Uttara University</p>
      </motion.div>
    </div>
  );
}

function SlideLayout({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-4xl text-gray-800">{title}</h2>
      </motion.div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="size-full bg-gray-50 flex flex-col">
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-green-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {currentSlide + 1} / {slides.length}
            </span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-600 transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
