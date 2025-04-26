import Link from 'next/link';

export default function Food() {
  return (
    <div className="min-h-screen">
      {/* 页面标题区 */}
      <div className="relative h-[40vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 opacity-90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">美食特产</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">鲜美可口，风味独特，江南味道</p>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 特色美食 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">特色美食</h2>
          <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-lg">
            江南地区的美食以清淡精致、鲜美可口著称，讲究原料的新鲜和烹饪的精细，形成了独具特色的江南菜系，包括苏菜、浙菜、徽菜等。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 bg-gray-200 relative">
                <svg className="w-12 h-12 text-gray-400 absolute inset-0 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">东坡肉</h3>
                <p className="text-gray-600 mb-4">
                  东坡肉源于宋代文学家苏东坡，肉质肥而不腻，软糯香甜，色泽红亮，是杭州菜的代表作品之一，也是江南地区最具代表性的传统名菜。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">浙江杭州</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解做法 →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 bg-gray-200 relative">
                <svg className="w-12 h-12 text-gray-400 absolute inset-0 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">松鼠桂鱼</h3>
                <p className="text-gray-600 mb-4">
                  松鼠桂鱼是苏州名菜，以桂鱼为主料，经过特殊的刀工和烹饪技法，成菜后鱼身呈松鼠状，外酥里嫩，酸甜可口，色香味俱佳。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">江苏苏州</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解做法 →</Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 bg-gray-200 relative">
                <svg className="w-12 h-12 text-gray-400 absolute inset-0 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">腌笃鲜</h3>
                <p className="text-gray-600 mb-4">
                  腌笃鲜是上海的传统名菜，以咸肉、鲜肉和春笋为主料，经过长时间炖煮，汤鲜味美，肉烂笋香，是春季的应季美食。
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">上海</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解做法 →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 地方小吃 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">地方小吃</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">南京盐水鸭</h3>
              <p className="text-gray-600 text-sm">肉质鲜嫩，咸淡适中，风味独特</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">杭州小笼包</h3>
              <p className="text-gray-600 text-sm">皮薄馅多，汤汁丰富，鲜香可口</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">无锡小笼</h3>
              <p className="text-gray-600 text-sm">肉馅鲜美，汤汁浓郁，一绝</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">绍兴臭豆腐</h3>
              <p className="text-gray-600 text-sm">闻着臭，吃着香，外酥里嫩</p>
            </div>
          </div>
        </div>

        {/* 特色特产 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">特色特产</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">西湖龙井</h3>
              <p className="text-gray-600 mb-6">
                西湖龙井是中国十大名茶之一，产于杭州西湖周围，以其"色绿、香郁、味甘、形美"四绝著称，是中国绿茶的代表，也是江南地区最著名的特产之一。
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解更多 →</Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">绍兴黄酒</h3>
              <p className="text-gray-600 mb-6">
                绍兴黄酒历史悠久，工艺精湛，以其色泽金黄、香气浓郁、口感醇厚而闻名，是中国传统的名酒，也是江南地区重要的特产之一。
              </p>
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">了解更多 →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}