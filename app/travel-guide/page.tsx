export default function TravelGuide() {
  return (
    <div className="min-h-screen">
      {/* 页面标题区 - 应用颜色变量 */}
      <div className="relative h-[40vh] w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 opacity-90"></div> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">旅游攻略</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">行程规划，交通指南，住宿推荐</p>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 最佳旅游季节 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">最佳旅游季节</h2>
          {/* 应用颜色变量 */}
          <p className="text-[var(--foreground)] opacity-80 mb-8 max-w-4xl mx-auto text-lg">
            江南地区四季分明，各有特色，不同季节有不同的风景和体验。了解最佳旅游时间，让您的江南之旅更加完美。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {/* 应用 .card */}
            <div className="card overflow-hidden">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] relative flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">春季 (3-5月)</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  春暖花开，江南水乡呈现出一片生机勃勃的景象。这是观赏园林、古镇的最佳时节，西湖的桃花、杨柳尤为美丽。
                </p>
                {/* 应用颜色变量 */}
                <span className="text-sm text-[var(--primary)] font-medium">推荐指数：★★★★★</span>
              </div>
            </div>
            
            {/* 应用 .card */}
            <div className="card overflow-hidden">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] relative flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">夏季 (6-8月)</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  夏季气温较高，但江南水乡的水系发达，可以感受清凉。莫干山等避暑胜地是夏季的理想选择。
                </p>
                {/* 应用颜色变量 */}
                <span className="text-sm text-[var(--primary)] font-medium">推荐指数：★★★☆☆</span>
              </div>
            </div>
            
            {/* 应用 .card */}
            <div className="card overflow-hidden">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] relative flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">秋季 (9-11月)</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  秋高气爽，是游览江南的黄金季节。此时天气宜人，雨水较少，各地的秋色美景和丰收景象令人陶醉。
                </p>
                {/* 应用颜色变量 */}
                <span className="text-sm text-[var(--primary)] font-medium">推荐指数：★★★★★</span>
              </div>
            </div>
            
            {/* 应用 .card */}
            <div className="card overflow-hidden">
              {/* 应用颜色变量 */}
              <div className="h-40 bg-[var(--accent)] relative flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">冬季 (12-2月)</h3>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80 mb-4">
                  冬季江南别有一番韵味，雪后的园林、古镇呈现出水墨画般的意境。此时游客较少，可以更加悠闲地游览。
                </p>
                {/* 应用颜色变量 */}
                <span className="text-sm text-[var(--primary)] font-medium">推荐指数：★★★☆☆</span>
              </div>
            </div>
          </div>
        </div>

        {/* 交通指南 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">交通指南</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 应用颜色变量 */}
            <div className="bg-[var(--accent)] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">外部交通</h3>
              {/* 应用颜色变量 */}
              <ul className="text-[var(--foreground)] opacity-80 space-y-4">
                <li className="flex items-start">
                  {/* 应用颜色变量 */}
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>高铁/动车：</strong>江南地区高铁网络发达，从北京、上海、广州等主要城市均有高铁直达杭州、苏州、南京等江南主要城市。</span>
                </li>
                <li className="flex items-start">
                  {/* 应用颜色变量 */}
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>飞机：</strong>杭州萧山国际机场、上海浦东/虹桥国际机场、南京禄口国际机场等均有国内外航班，交通便利。</span>
                </li>
                <li className="flex items-start">
                  {/* 应用颜色变量 */}
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>长途汽车：</strong>各大城市之间均有长途汽车连接，票价相对较低，但耗时较长。</span>
                </li>
              </ul>
            </div>
            
            {/* 应用颜色变量 */}
            <div className="bg-[var(--accent)] p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">内部交通</h3>
              {/* 应用颜色变量 */}
              <ul className="text-[var(--foreground)] opacity-80 space-y-4">
                <li className="flex items-start">
                  {/* 应用颜色变量 */}
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>地铁：</strong>杭州、南京、苏州等城市均有完善的地铁系统，是城市内出行的首选。</span>
                </li>
                <li className="flex items-start">
                  {/* 应用颜色变量 */}
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>公交车：</strong>各城市公交线路覆盖广泛，票价便宜，适合短途出行。</span>
                </li>
                <li className="flex items-start">
                  {/* 应用颜色变量 */}
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>出租车/网约车：</strong>便捷但相对较贵，适合行李较多或赶时间的情况。</span>
                </li>
                <li className="flex items-start">
                  {/* 应用颜色变量 */}
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>水上交通：</strong>在一些水乡古镇，乘坐游船是游览的主要方式，既是交通工具也是旅游体验的一部分。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 旅行建议 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">旅行建议</h2>
          {/* 应用 .card */}
          <div className="card p-8">
            {/* 应用颜色变量 */}
            <ul className="text-[var(--foreground)] opacity-80 space-y-6">
              <li className="flex items-start">
                {/* 应用颜色变量 */}
                <span className="bg-[var(--accent)] text-[var(--primary)] font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <div>
                  <h4 className="text-lg font-semibold mb-2">行前准备</h4>
                  <p>提前规划行程，预订酒店和交通，特别是在旅游旺季。准备舒适的鞋子和衣物，江南地区湿度较大，夏季带好防晒用品，雨季带好雨具。</p>
                </div>
              </li>
              <li className="flex items-start">
                {/* 应用颜色变量 */}
                <span className="bg-[var(--accent)] text-[var(--primary)] font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <div>
                  <h4 className="text-lg font-semibold mb-2">住宿选择</h4>
                  <p>江南地区有各种类型的住宿，从豪华酒店到特色民宿。在古镇内住宿可以体验更多当地风情，但价格可能较高且设施简单，需根据个人需求选择。</p>
                </div>
              </li>
              <li className="flex items-start">
                {/* 应用颜色变量 */}
                <span className="bg-[var(--accent)] text-[var(--primary)] font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <div>
                  <h4 className="text-lg font-semibold mb-2">饮食注意</h4>
                  <p>江南菜以清淡为主，可以尝试当地特色小吃和名菜。注意饮食卫生，尽量在正规餐厅或当地有口碑的小店就餐。</p>
                </div>
              </li>
              <li className="flex items-start">
                {/* 应用颜色变量 */}
                <span className="bg-[var(--accent)] text-[var(--primary)] font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <div>
                  <h4 className="text-lg font-semibold mb-2">文化respect</h4>
                  <p>江南地区历史悠久，文化底蕴深厚，参观寺庙、古迹时请尊重当地习俗和规定，注意着装得体，不要大声喧哗。</p>
                </div>
              </li>
              <li className="flex items-start">
                {/* 应用颜色变量 */}
                <span className="bg-[var(--accent)] text-[var(--primary)] font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                <div>
                  <h4 className="text-lg font-semibold mb-2">行程安排</h4>
                  <p>不要安排过于紧凑的行程，留出充足时间慢慢体验江南的悠闲与美好。建议每个城市至少安排2-3天，古镇可安排1-2天。</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 推荐行程 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">推荐行程</h2>
          {/* 应用 .card */}
          <div className="card p-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">经典江南六日游</h3>
            <div className="space-y-6">
              {/* 应用颜色变量 */}
              <div className="border-l-4 border-[var(--primary)] pl-4">
                <h4 className="text-lg font-semibold mb-2">第1-2天：杭州</h4>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80">游览西湖景区（含断桥、苏堤、白堤等）、灵隐寺、西湖博物馆、龙井茶园、河坊街。</p>
              </div>
              {/* 应用颜色变量 */}
              <div className="border-l-4 border-[var(--primary)] pl-4">
                <h4 className="text-lg font-semibold mb-2">第3-4天：苏州</h4>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80">游览拙政园、留园、苏州博物馆、平江路、山塘街。</p>
              </div>
              {/* 应用颜色变量 */}
              <div className="border-l-4 border-[var(--primary)] pl-4">
                <h4 className="text-lg font-semibold mb-2">第5天：周庄/乌镇</h4>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80">选择一个水乡古镇（周庄或乌镇），体验小桥流水人家的独特风情。</p>
              </div>
              {/* 应用颜色变量 */}
              <div className="border-l-4 border-[var(--primary)] pl-4">
                <h4 className="text-lg font-semibold mb-2">第6天：南京</h4>
                {/* 应用颜色变量 */}
                <p className="text-[var(--foreground)] opacity-80">游览中山陵、南京博物院、夫子庙秦淮风光带。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}