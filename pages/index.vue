<template>
    <div>
      <!-- <h1>data:{{ tokenData }}</h1> -->
      <div class="banner">
        <div class="container">
          <div class="banner_nav">
            <div class="item">Jami Hodimlar:213 ta</div>
            <div class="item">Kelganlar:213 ta</div>
            <div class="item">Kelmaganlar:213 ta</div>
          </div>
          <div class="banner_bottom">
            <div class="slice_items">
              <div class="item item_all">All</div>
              <div class="item" v-for="c in 8" :key="c">1-bo'lim</div>
              <div class="item item_yana">yana</div>
            </div>
            <!-- <div class="items">
              <div class="item" v-for="b in 20" :key="b">1-bo'lim</div>
            </div> -->
            <!-- <h1 :class="{itemBolim : 'yana' ? 'berkitish' }"></h1> -->
            <div class="search">
              <input type="text" class="search_input" placeholder="Search.." />
              <div class="search_icon">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.3037 28.6074C6.41923 28.6074 0 22.1882 0 14.3037C0 6.41923 6.41923 0 14.3037 0C22.1882 0 28.6074 6.41923 28.6074 14.3037C28.6074 22.1882 22.1882 28.6074 14.3037 28.6074ZM14.3037 2.09323C7.56353 2.09323 2.09323 7.57748 2.09323 14.3037C2.09323 21.03 7.56353 26.5142 14.3037 26.5142C21.0439 26.5142 26.5142 21.03 26.5142 14.3037C26.5142 7.57748 21.0439 2.09323 14.3037 2.09323Z"
                    fill="#292D32"
                  />
                  <path
                    d="M28.9571 30.0029C28.692 30.0029 28.4269 29.9052 28.2175 29.6959L25.4266 26.9049C25.0219 26.5002 25.0219 25.8304 25.4266 25.4257C25.8313 25.021 26.5011 25.021 26.9058 25.4257L29.6967 28.2167C30.1014 28.6214 30.1014 29.2912 29.6967 29.6959C29.4874 29.9052 29.2223 30.0029 28.9571 30.0029Z"
                    fill="#292D32"
                  />
                </svg>
              </div>
            </div>
            <div class="bolim">
              <div class="bolim_item">Ism Familya</div>
              <div class="bolim_item">Kasbi</div>
              <div class="bolim_item">Status</div>
              <div class="bolim_item">Kirish</div>
              <div class="bolim_item">Chiqish</div>
              <div class="bolim_item">Avatar</div>
            </div>
            <div class="peoples">
              <div class="people">
                <div class="people_name item">Alisherjon Valijonov</div>
                <div class="people_job item">Usta</div>
                <div class="people_status item">ishda</div>
                <div class="people_access item">
                  08:30
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="36"
                    viewBox="0 0 38 36"
                    fill="none"
                  >
                    <path
                      d="M9.06818 10.8393C9.32091 10.663 9.6386 10.5797 9.97734 10.6401C10.6322 10.7566 11.0777 11.3951 10.9611 12.05L8.73373 24.5606L21.2443 26.7879C21.8992 26.9045 22.3447 27.543 22.2281 28.1979C22.1115 28.8528 21.473 29.2983 20.8181 29.1817L7.11069 26.7412C6.4558 26.6246 6.01032 25.9862 6.12692 25.3313L8.56739 11.6238C8.6277 11.2851 8.81545 11.0156 9.06818 10.8393Z"
                      fill="#FCA311"
                    />
                    <path
                      d="M6.85264 24.39L29.2389 8.77025C29.7843 8.38973 30.5521 8.52643 30.9326 9.07179C31.3131 9.61715 31.1764 10.3849 30.6311 10.7655L8.24477 26.3852C7.69942 26.7657 6.93162 26.629 6.5511 26.0836C6.17059 25.5383 6.30729 24.7705 6.85264 24.39Z"
                      fill="#FCA311"
                    />
                  </svg>
                </div>
                <div class="people_exit item">
                  08:30
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="36"
                    viewBox="0 0 38 36"
                    fill="none"
                  >
                    <path
                      d="M28.2037 24.4611C27.9513 24.6378 27.6337 24.7216 27.2949 24.6618C26.6398 24.5463 26.1932 23.9086 26.3088 23.2535L28.5154 10.7392L16.0011 8.53267C15.346 8.41716 14.8995 7.77943 15.015 7.12435C15.1305 6.46927 15.7682 6.02273 16.4233 6.13824L30.1348 8.55592C30.7899 8.67142 31.2364 9.30915 31.1209 9.96423L28.7032 23.6757C28.6434 24.0145 28.4561 24.2843 28.2037 24.4611Z"
                      fill="#292D32"
                    />
                    <path
                      d="M30.3966 10.9067L8.0363 26.5635C7.49158 26.945 6.72355 26.8095 6.34213 26.2648C5.96071 25.7201 6.09613 24.9521 6.64086 24.5707L29.0012 8.91379C29.5459 8.53237 30.3139 8.66779 30.6953 9.21252C31.0768 9.75724 30.9413 10.5253 30.3966 10.9067Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <!-- <pre>{{ apiInfo }}wef</pre> -->
            <!-- <button @click="tokenApi">tokenApi</button> -->
       
          </div>
        </div>
      </div>
    </div>
  </template>