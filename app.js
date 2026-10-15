/**
 * ==========================================================================
 * 수능 국어 10분 어휘력 마스터 (속담·관용표현 모의고사) - app.js
 * 제작: 고3 수능 국어 워밍업용 5지선다 모의고사 웹앱
 * 기능: 수능/모의평가/EBS 연계 출처 표기, 10분 타이머, OMR, 오답 클리닉
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. [문제 은행] 수능 및 모의고사 빈출 속담·관용표현 30제 (출처 명시)
// --------------------------------------------------------------------------
const QUESTION_BANK = [
  {
    id: 1,
    type: "속담",
    source: "2024학년도 대학수학능력시험",
    question: "다음 <보기>의 대화에서 ㉠에 들어갈 가장 적절한 속담은?",
    passage: "민수: 이번 수능 모의평가에서 비문학 지문을 제대로 안 읽고 넘겨서 점수가 많이 깎였어. 다음엔 꼭 시간 배분을 철저히 해야겠어.\n지호: 시험이 끝나고 나서야 그렇게 후회하면 뭐 해? 이미 성적표는 나왔는데 (  ㉠  )(이)라는 말도 있잖아. 다음엔 미리 준비하자.",
    options: [
      "소 잃고 외양간 고친다",
      "가랑비에 옷 젖는 줄 모른다",
      "등잔 밑이 어둡다",
      "믿는 도끼에 발등 찍힌다",
      "호랑이도 제 말 하면 온다"
    ],
    answer: 0,
    explanation: "'소 잃고 외양간 고친다'는 일을 그르친 뒤에 뉘우쳐 대비하여도 소용이 없음을 비유적으로 이르는 말입니다. 시험이 끝난 뒤에 후회하는 맥락에 가장 부합합니다.\n• ②: 사소한 것도 거듭되면 큰 영향을 미침.\n• ③: 가까운 곳의 일을 도리어 잘 모름.\n• ④: 믿었던 사람에게 배신당함.\n• ⑤: 다른 사람에 대해 이야기할 때 공교롭게 그 사람이 나타남."
  },
  {
    id: 2,
    type: "관용표현",
    source: "2024학년도 9월 모의평가",
    question: "다음 밑줄 친 관용표현의 문맥적 의미로 가장 알맞은 것은?",
    passage: "“그 사람은 선거 운동본부에서 오랫동안 중책을 맡아 일하더니, 정재계 전반에 걸쳐 <u>발이 넓어서</u> 모르는 사람이 없다.”",
    options: [
      "걸음걸이가 남들보다 무척 빠르다",
      "교제하는 범위가 넓어 아는 사람이 많다",
      "남의 일에 쓸데없이 참견을 많이 한다",
      "어디를 가나 대접을 넉넉하게 받는다",
      "행동이 민첩하여 무슨 일이든 솔선수범한다"
    ],
    answer: 1,
    explanation: "'발이 넓다'는 사교적이거나 활동 범위가 넓어 아는 사람이 많다는 뜻의 관용표현입니다.\n• 남의 일에 쓸데없이 참견하는 것은 '오지랖이 넓다'라고 표현합니다."
  },
  {
    id: 3,
    type: "속담",
    source: "2023학년도 6월 모의평가",
    question: "다음 상황을 가장 잘 나타낸 속담으로 적절한 것은?",
    passage: "영희는 반장 선거에 출마하면서 학급 환경 개선, 매점 가격 인하, 자습 시간 단축 등 지키기 힘든 화려한 공약을 잔뜩 내세웠다. 그러나 실천 방안은 하나도 구체적이지 않았다.",
    options: [
      "바늘 도둑이 소 도둑 된다",
      "우물을 파도 한 우물을 파라",
      "빈 수레가 더 요란하다",
      "구슬이 서 말이라도 꿰어야 보배",
      "개구리 올챙이 적 생각 못 한다"
    ],
    answer: 2,
    explanation: "'빈 수레가 더 요란하다'는 실속이나 지식이 없는 사람이 겉으로 더 아는 체하고 떠들어 댐을 비유하는 속담입니다.\n• ④: 아무리 좋은 것이라도 다듬고 정리하여 쓸모 있게 만들어야 가치가 있다는 뜻."
  },
  {
    id: 4,
    type: "관용표현",
    source: "2023학년도 대학수학능력시험",
    question: "다음 밑줄 친 부분 중, 관용표현의 의미가 올바르게 쓰인 것은?",
    passage: "",
    options: [
      "동생은 비밀을 잘 지켜서 늘 <u>입이 가볍다</u>는 말을 듣는다. (말이 신중하고 과묵하다)",
      "친구의 어려운 사정을 듣고 나니 도저히 <u>발을 끊을</u> 수 없었다. (인연을 맺고 자주 찾아가다)",
      "수능 당일이 다가오자 너무 긴장되어 <u>간이 부었다</u>. (몹시 두렵고 겁이 나다)",
      "그는 실수를 연발하더니 결국 프로젝트에서 <u>손을 뗐다</u>. (진행하던 일의 관계를 끊고 그만두다)",
      "그는 어려운 상황에서도 <u>귀가 얇아서</u> 자신의 주관을 꿋꿋이 지켰다. (남의 말에 쉽게 흔들리지 않다)"
    ],
    answer: 3,
    explanation: "'손을 떼다'는 하던 일에서 물러나거나 그만둔다는 뜻으로 올바르게 쓰였습니다.\n• ①: '입이 가볍다'는 말을 함부로 잘 옮긴다는 뜻 (과묵한 것은 '입이 무겁다').\n• ②: '발을 끊다'는 오가지 않거나 왕래를 그만둔다는 뜻.\n• ③: '간이 붓다'는 지나치게 대담하거나 겁이 없다는 뜻 (겁이 나는 것은 '간이 콩알만 해지다').\n• ⑤: '귀가 얇다'는 남의 말을 쉽게 믿고 줏대가 없다는 뜻."
  },
  {
    id: 5,
    type: "속담",
    source: "2024학년도 EBS 수능특강 국어",
    question: "다음 <보기>의 밑줄 친 문맥에 어울리는 속담은?",
    passage: "<보 기>\n아무리 어려운 수능 비문학 지문이라도 한 문장 한 문장 꼼꼼히 독해의 기초를 쌓아가다 보면 결국 1등급에 도달할 수 있다. <u>작은 노력이라도 꾸준히 거듭되면 마침내 큰 결과를 이루어 내는 법</u>이기 때문이다.",
    options: [
      "달면 삼키고 쓰면 뱉는다",
      "쇠뿔도 단김에 빼라",
      "도둑이 제 발 저린다",
      "닭 쫓던 개 지붕 쳐다본다",
      "티끌 모아 태산"
    ],
    answer: 4,
    explanation: "'티끌 모아 태산'은 아무리 작은 것이라도 모이고 쌓이면 큰 덩어리가 됨을 뜻합니다.\n• ①: 자신의 이익에만 따라 행동함을 비판함.\n• ②: 어떤 일을 하려고 마음먹었으면 주저하지 말고 즉시 해치워야 함.\n• ④: 애써 하던 일이 실패로 돌아가 어찌할 도리가 없음."
  },
  {
    id: 6,
    type: "관용표현",
    source: "2022학년도 9월 모의평가",
    question: "신체 어휘와 관련된 관용표현 중, '염치가 없고 뻔뻔스럽다'의 의미를 지닌 것은?",
    passage: "",
    options: [
      "어깨가 무겁다",
      "낯이 두껍다",
      "눈에 밟히다",
      "간이 콩알만 해지다",
      "손이 크다"
    ],
    answer: 1,
    explanation: "'낯(얼굴)이 두껍다'는 부끄러움을 모르고 뻔뻔하다는 뜻입니다.\n• ① '어깨가 무겁다': 무거운 책임이나 부담을 지고 있다.\n• ③ '눈에 밟히다': 잊히지 않고 자꾸 눈에 아른거리다.\n• ⑤ '손이 크다': 씀씀이가 넉넉하고 후하다."
  },
  {
    id: 7,
    type: "속담",
    source: "2022학년도 대학수학능력시험",
    question: "다음 문맥의 빈칸에 들어갈 속담으로 가장 알맞은 것은?",
    passage: "“평소에 친하게 지내던 친구가 내 약점을 남들에게 퍼뜨릴 줄은 꿈에도 몰랐어. 정말 (           )(이)라더니 배신감이 너무 크다.”",
    options: [
      "호랑이에게 물려 가도 정신만 차리면 산다",
      "고래 싸움에 새우 등 터진다",
      "믿는 도끼에 발등 찍힌다",
      "가는 말이 고와야 오는 말이 곱다",
      "말 한마디에 천 냥 빚도 갚는다"
    ],
    answer: 2,
    explanation: "'믿는 도끼에 발등 찍힌다'는 믿고 의지하던 사람에게 뜻밖의 화를 입거나 배신을 당함을 비유합니다.\n• ② '고래 싸움에 새우 등 터진다': 강자들의 다툼 사이에 끼어 약자가 억울한 피해를 봄."
  },
  {
    id: 8,
    type: "관용표현",
    source: "2023학년도 3월 전국연합학력평가",
    question: "다음 중 '시험이나 면접에서 떨어지다'라는 뜻을 나타내는 관용표현은?",
    passage: "",
    options: [
      "국수를 먹다",
      "비행기를 태우다",
      "바람을 맞다",
      "미역국을 먹다",
      "뜸을 들이다"
    ],
    answer: 3,
    explanation: "'미역국을 먹다'는 시험에 미끄러져 떨어지거나 해고당함을 비유적으로 이르는 관용표현입니다.\n• ① '국수를 먹다': 남의 결혼식에 가서 대접을 받다 (혼례를 치르다).\n• ② '비행기를 태우다': 남을 지나치게 칭찬하여 우쭐하게 만들다.\n• ③ '바람을 맞다': 상대방이 약속을 지키지 않아 헛걸음하다."
  },
  {
    id: 9,
    type: "속담",
    source: "2024학년도 EBS 수능완성 국어",
    question: "다음 <보기>에서 설명하는 속담의 의미와 가장 유사한 것은?",
    passage: "<보 기>\n\"말이 씨가 된다.\"",
    options: [
      "말은 많이 할수록 상대방과의 오해를 쉽게 풀 수 있다.",
      "씨앗을 뿌리듯이 지식을 널리 가르치면 훌륭한 인재가 자란다.",
      "말은 한번 입 밖에 내면 아무런 대가 없이도 퍼져 나간다.",
      "말을 조리 있게 잘하는 사람이 사회적으로 큰 성공을 거둔다.",
      "늘 말하던 것이 결국 실제로 이루어질 수 있으니 말을 조심해야 한다."
    ],
    answer: 4,
    explanation: "'말이 씨가 된다'는 늘 입버릇처럼 하던 말이 화가 되거나 그대로 실현될 수 있으므로 부정적인 말이나 불길한 말을 삼가야 한다는 경계의 속담입니다."
  },
  {
    id: 10,
    type: "관용표현",
    source: "2021학년도 대학수학능력시험",
    question: "다음 밑줄 친 ㉠과 의미상 바꾸어 쓸 수 있는 관용구로 가장 적절한 것은?",
    passage: "선생님: 이번 수능 국어 영역 연계 교재는 지문 분석을 철저히 해야 해. 어설프게 눈으로만 훑고 지나가면 <u>아무런 소득도 얻지 못하게</u> 된단다.",
    options: [
      "골머리를 썩이다",
      "죽도 밥도 안 되다",
      "귀에 못이 박히다",
      "허리띠를 졸라매다",
      "간에 기별도 안 가다"
    ],
    answer: 1,
    explanation: "'죽도 밥도 안 되다'는 일이 어중간하게 잘못되어 아무런 쓸모나 성과도 없게 됨을 뜻합니다.\n• ① '골머리를 썩이다': 해결하기 어려운 일로 몹시 마음을 쓰고 고민하다.\n• ④ '허리띠를 졸라매다': 굳은 결의를 다지거나 경제적으로 절약하다.\n• ⑤ '간에 기별도 안 가다': 먹은 양이 너무 적어 배를 채우지 못하다."
  },
  {
    id: 11,
    type: "속담",
    source: "2022학년도 6월 모의평가",
    question: "다음 상황에 가장 잘 들어맞는 속담은?",
    passage: "수험생 준혁이는 평소 모의고사에서 늘 만점을 받던 쉬운 문법 문항에서 마킹 실수를 하여 점수를 잃고 말았다.",
    options: [
      "백지장도 맞들면 낫다",
      "우물 안 개구리",
      "원숭이도 나무에서 떨어진다",
      "사공이 많으면 배가 산으로 간다",
      "호랑이 굴에 가야 호랑이 새끼를 잡는다"
    ],
    answer: 2,
    explanation: "'원숭이도 나무에서 떨어진다'는 아무리 익숙하고 능숙한 사람이라도 때로는 실수할 수 있음을 비유합니다.\n• ①: 아무리 쉬운 일이라도 서로 힘을 합치면 훨씬 수월함.\n• ④: 주관하는 사람이 많으면 일이 제대로 되지 않고 엉뚱한 방향으로 흘러감."
  },
  {
    id: 12,
    type: "관용표현",
    source: "2023학년도 EBS 수능특강 국어",
    question: "다음 중 '마음속에 품은 생각이나 본심을 솔직하게 털어놓다'를 뜻하는 관용표현은?",
    passage: "",
    options: [
      "속을 썩이다",
      "발등에 불이 떨어지다",
      "눈총을 받다",
      "속을 터놓다",
      "코가 납작해지다"
    ],
    answer: 3,
    explanation: "'속을 터놓다'는 마음속에 숨김없이 생각과 감정을 솔직히 털어놓음을 이릅니다.\n• ② '발등에 불이 떨어지다': 닥친 일이 몹시 급박하게 되다.\n• ⑤ '코가 납작해지다': 기가 꺾이거나 몹시 무안을 당하다."
  },
  {
    id: 13,
    type: "속담",
    source: "2024학년도 6월 모의평가",
    question: "다음 두 사람이 나누는 대화의 빈칸에 알맞은 속담은?",
    passage: "가: 선생님께서 왜 3월 모의고사 오답 정리를 오늘 바로 끝내라고 강조하셨을까?\n나: 결심했을 때 바로 실천해야 효과가 있잖아. (           )(이)라는 속담처럼 일을 미루지 말고 열기가 있을 때 끝내야지.",
    options: [
      "쇠뿔도 단김에 빼라",
      "개천에서 용 난다",
      "돌다리도 두들겨 보고 건너라",
      "낮말은 새가 듣고 밤말은 쥐가 듣는다",
      "서당 개 삼 년이면 풍월을 읊는다"
    ],
    answer: 0,
    explanation: "'쇠뿔도 단김에 빼라'는 어떤 일을 하려고 마음먹었으면 주저하지 말고 기회가 닿았을 때 곧바로 해치워야 한다는 뜻입니다.\n• ③: 매사에 아무리 안전해 보여도 신중을 기해야 함."
  },
  {
    id: 14,
    type: "관용표현",
    source: "2020학년도 대학수학능력시험",
    question: "다음 밑줄 친 표현 중 문맥에 맞지 않게 잘못 사용된 것은?",
    passage: "",
    options: [
      "마감일이 내일로 다가와 팀원 모두 <u>눈코 뜰 새 없이</u> 바쁜 하루를 보냈다.",
      "그녀는 이번 수능 준비에 온 정성을 다해 <u>심혈을 기울였다</u>.",
      "평소 남의 의견을 전혀 안 듣던 그가 <u>콧대가 높아져서</u> 겸손하게 머리를 숙였다.",
      "선생님의 격려 한마디에 용기를 얻어 <u>기운을 차렸다</u>.",
      "동생은 잘못을 들키자 <u>쥐구멍을 찾을</u> 만큼 몹시 부끄러워했다."
    ],
    answer: 2,
    explanation: "'콧대가 높다'는 거만하고 잘난 체한다는 부정적 의미입니다. 겸손하게 머리를 숙였다는 문맥에는 '콧대가 꺾여서'가 올바른 표현입니다."
  },
  {
    id: 15,
    type: "속담",
    source: "2023학년도 9월 모의평가",
    question: "다음 <보기>의 상황에 가장 어울리는 속담은?",
    passage: "<보 기>\n자신도 스마트폰을 보느라 공부를 안 하면서, 옆자리 짝에게 왜 집중 안 하고 딴짓을 하냐며 잔소리를 늘어놓는 학생의 태도.",
    options: [
      "도랑 치고 가재 잡는다",
      "배보다 배꼽이 더 크다",
      "누워서 침 뱉기",
      "하늘이 무너져도 솟아날 구멍이 있다",
      "똥 묻은 개가 겨 묻은 개 나무란다"
    ],
    answer: 4,
    explanation: "'똥 묻은 개가 겨 묻은 개 나무란다'는 자신은 더 큰 결점이나 잘못이 있으면서 도리어 남의 작은 흉을 들추어 비난함을 꼬집는 속담입니다."
  },
  {
    id: 16,
    type: "관용표현",
    source: "2024학년도 10월 전국연합학력평가",
    question: "‘마음이 초조하여 안절부절못하다’를 나타내는 관용표현은?",
    passage: "",
    options: [
      "간이 크다",
      "애가 타다",
      "입에 침이 마르다",
      "귀를 기울이다",
      "손을 벌리다"
    ],
    answer: 1,
    explanation: "'애가 타다'는 몹시 답답하거나 안타까워 속이 상하고 초조해함을 뜻합니다.\n• ③ '입에 침이 마르다': 칭찬이나 자랑을 되풀이하여 입이 마를 정도로 말하다.\n• ⑤ '손을 벌리다': 남에게 돈이나 도움을 달라고 요구하다."
  },
  {
    id: 17,
    type: "속담",
    source: "2021학년도 9월 모의평가",
    question: "다음 대화의 밑줄 친 자리에 들어갈 알맞은 속담은?",
    passage: "수진: “너 어제 민재가 전학 간다는 소식 들었어? 아무에게도 말하지 말라던데 벌써 반 애들이 다 알더라.”\n태양: “비밀이 어디 있겠어. (           )(이)라는 말처럼 소문은 순식간에 퍼지는 법이야.”",
    options: [
      "발 없는 말이 천 리 간다",
      "고진감래(苦盡甘來)",
      "우물 안 개구리",
      "윗물이 맑아야 아랫물이 맑다",
      "산 넘어 산이다"
    ],
    answer: 0,
    explanation: "'발 없는 말이 천 리 간다'는 말은 순식간에 널리 퍼지므로 늘 말조심을 해야 함을 이르는 속담입니다."
  },
  {
    id: 18,
    type: "관용표현",
    source: "2023학년도 10월 전국연합학력평가",
    question: "다음 문맥의 빈칸에 들어갈 관용표현으로 가장 적절한 것은?",
    passage: "“어릴 때부터 음악에 남다른 재능을 보이던 그 친구가 마침내 세계적인 콩쿠르에서 우승하며 (           ) 시작했다.”",
    options: [
      "발목을 잡기",
      "찬물을 끼얹기",
      "오지랖을 부리기",
      "두각을 나타내기",
      "어깃장을 놓기"
    ],
    answer: 3,
    explanation: "'두각을 나타내다'는 여러 사람 중에서 뛰어난 학식이나 재능을 드러내어 두드러지다의 뜻입니다.\n• ① '발목을 잡다': 남의 일에 방해를 놓다.\n• ② '찬물을 끼얹다': 한창 잘되어 가는 일의 분위기를 깨뜨리다.\n• ⑤ '어깃장을 놓다': 순순히 따르지 않고 빗나가는 행동으로 훼방을 놓다."
  },
  {
    id: 19,
    type: "속담",
    source: "2022학년도 EBS 수능완성 국어",
    question: "다음 중 '서로 대조적이거나 어울리지 않는 것이 겉으로 엉뚱하게 드러남'을 비판하는 속담은?",
    passage: "",
    options: [
      "공든 탑이 무너지랴",
      "등잔 밑이 어둡다",
      "개발에 편자",
      "고양이 쥐 생각한다",
      "호랑이도 제 말 하면 온다"
    ],
    answer: 2,
    explanation: "'개발에 편자'는 옷차림이나 소지품 등이 주인의 분수나 처지에 어울리지 않음을 비유하는 속담입니다.\n• ④ '고양이 쥐 생각한다': 속으로는 해칠 마음을 품고 있으면서 겉으로만 위하는 척함을 이릅니다."
  },
  {
    id: 20,
    type: "관용표현",
    source: "2024학년도 3월 전국연합학력평가",
    question: "‘남의 환심을 사기 위해 마음에도 없이 좋게 꾸며 말하다’를 뜻하는 관용표현은?",
    passage: "",
    options: [
      "입이 무겁다",
      "눈을 붙이다",
      "손에 땀을 쥐다",
      "가슴을 쓸어내리다",
      "입에 발린 소리를 하다"
    ],
    answer: 4,
    explanation: "'입에 발린 소리'는 속마음은 그렇지 않으면서 겉으로만 번지르르하게 칭찬하거나 아첨하는 말을 뜻합니다.\n• ② '눈을 붙이다': 잠시 잠을 자다.\n• ③ '손에 땀을 쥐다': 아슬아슬하여 몹시 긴장되다.\n• ④ '가슴을 쓸어내리다': 안도하여 불안한 마음을 진정시키다."
  },
  {
    id: 21,
    type: "속담",
    source: "2020학년도 6월 모의평가",
    question: "다음 <보기>의 글쓴이가 강조하고자 하는 바를 담은 속담은?",
    passage: "<보 기>\n아무리 모의고사 성적이 잠시 정체되어 있더라도 포기하지 마라. 겨울이 깊어지면 봄이 멀지 않듯이, 힘든 시기를 묵묵히 버텨내면 반드시 값진 결실을 보는 날이 온다.",
    options: [
      "세 살 버릇 여든까지 간다",
      "고생 끝에 낙이 온다",
      "벼룩의 간을 내먹는다",
      "가재는 게 편이다",
      "까마귀 날자 배 떨어진다"
    ],
    answer: 1,
    explanation: "'고생 끝에 낙이 온다(고진감래)'는 고통스러운 수험 과정을 견뎌내면 결국 좋은 결과가 따른다는 격려의 메시지에 들어맞습니다.\n• ⑤ '까마귀 날자 배 떨어진다': 아무 관계도 없는 일이 공교롭게 동시에 일어나 억울한 의심을 받음."
  },
  {
    id: 22,
    type: "관용표현",
    source: "2023학년도 4월 전국연합학력평가",
    question: "다음 밑줄 친 표현의 의미가 바르게 풀이된 것은?",
    passage: "“그 학생은 평소에 <u>눈썰미가 있어서</u> 한 번 배운 독해 공식은 절대 잊지 않는다.”",
    options: [
      "한 번 보거나 들은 것을 곧바로 익히고 흉내 내는 재주가 있다.",
      "눈이 매우 밝아서 멀리 있는 작은 글씨도 잘 읽는다.",
      "남의 잘못된 점이나 흠을 날카롭게 잘 찾아낸다.",
      "눈치가 매우 빨라 상대방의 기분을 기막히게 맞춘다.",
      "시각적인 예술 감각이 뛰어나 그림을 잘 그린다."
    ],
    answer: 0,
    explanation: "'눈썰미'는 본 것을 눈여겨보아 그대로 해내는 재주나 본능적인 감각을 뜻합니다."
  },
  {
    id: 23,
    type: "속담",
    source: "2021학년도 6월 모의평가",
    question: "다음 중 '비밀이 절대 새어나가지 않는 완전무결한 상황은 없다'는 뜻을 지닌 속담은?",
    passage: "",
    options: [
      "사촌이 땅을 사면 배가 아프다",
      "자라 보고 놀란 가슴 솥뚜껑 보고 놀란다",
      "남의 떡이 더 커 보인다",
      "낮말은 새가 듣고 밤말은 쥐가 듣는다",
      "종로에서 뺨 맞고 한강에서 눈 흘긴다"
    ],
    answer: 3,
    explanation: "'낮말은 새가 듣고 밤말은 쥐가 듣는다'는 아무리 은밀하게 한 말이라도 반드시 누군가 듣게 되므로 늘 말을 조심하라는 속담입니다."
  },
  {
    id: 24,
    type: "관용표현",
    source: "2022학년도 3월 전국연합학력평가",
    question: "‘어떤 일에 실패하거나 실수를 하여 매우 부끄럽고 무안해지다’를 뜻하는 관용표현은?",
    passage: "",
    options: [
      "배를 잡고 웃다",
      "날개 돋친 듯이 팔리다",
      "쥐구멍에라도 들어가고 싶다",
      "도마 위에 오르다",
      "눈썹 하나 까딱하지 않다"
    ],
    answer: 2,
    explanation: "'쥐구멍에 들어가고 싶다'는 너무 무안하고 부끄러워 어디론가 몸을 숨기고 싶을 정도의 심정을 이릅니다.\n• ④ '도마 위에 오르다': 비판이나 공격의 대상이 되어 시비가 가려지게 되다.\n• ⑤ '눈썹 하나 까딱하지 않다': 어떤 위험이나 놀라운 일에도 전혀 동요하지 않고 태연하다."
  },
  {
    id: 25,
    type: "속담",
    source: "2024학년도 EBS 수능특강 국어",
    question: "다음 빈칸에 들어갈 속담으로 가장 적절한 것은?",
    passage: "“어려운 수능 수학 킬러 문항도 공식 하나만 외운다고 풀리는 게 아니야. 개념, 계산력, 문제 독해력이 한데 어우러져야지. (           )(이)라는 옛말처럼 말이야.”",
    options: [
      "아니 땐 굴뚝에 연기 날까",
      "구슬이 서 말이라도 꿰어야 보배",
      "달걀로 바위 치기",
      "배보다 배꼽이 크다",
      "호랑이에게 날개 단 격"
    ],
    answer: 1,
    explanation: "'구슬이 서 말이라도 꿰어야 보배'는 아무리 훌륭하고 좋은 재료나 지식이 있더라도 잘 정리하고 다듬어 활용해야 가치가 드러난다는 뜻입니다."
  },
  {
    id: 26,
    type: "관용표현",
    source: "2023학년도 대학수학능력시험",
    question: "다음 밑줄 친 부분과 뜻이 가장 가까운 관용표현은?",
    passage: "“수능 1교시 국어 시험지를 받자마자 긴장감에 <u>심장이 쿵쾅거리고 몹시 두려웠지만</u>, 심호흡을 하며 침착함을 되찾았다.”",
    options: [
      "배포가 유달리 컸다",
      "손톱만큼도 신경 안 썼다",
      "콧노래를 흥얼거렸다",
      "얼굴에 철판을 깔았다",
      "가슴이 철렁 내려앉았다"
    ],
    answer: 4,
    explanation: "'가슴이 철렁 내려앉다'는 몹시 놀라거나 두려워 가슴이 크게 뛰고 긴장됨을 뜻하는 관용표현입니다."
  },
  {
    id: 27,
    type: "속담",
    source: "2022학년도 대학수학능력시험",
    question: "다음 대화의 문맥상 ㉠에 들어갈 가장 알맞은 속담은?",
    passage: "민경: “수능 날 지각할까 봐 알람 시계를 3개나 맞춰 두고, 시험장 가는 길도 어제 미리 두 번이나 다녀왔어.”\n준우: “잘했어! (  ㉠  )(이)라는데, 인생의 중요한 시험일수록 아무리 철저히 확인해도 지나치지 않지.”",
    options: [
      "돌다리도 두들겨 보고 건너라",
      "모르는 게 약이다",
      "길고 짧은 것은 대어 보아야 안다",
      "윗물이 맑아야 아랫물이 맑다",
      "뚝배기보다 장맛이다"
    ],
    answer: 0,
    explanation: "'돌다리도 두들겨 보고 건너라'는 잘 아는 일이나 안전한 일이라도 세심하게 주의를 기울여 조심하라는 경계의 속담입니다."
  },
  {
    id: 28,
    type: "관용표현",
    source: "2021학년도 3월 전국연합학력평가",
    question: "‘자신의 주관이 없이 남의 말이나 행동에 덩달아 휩쓸리다’를 뜻하는 관용표현은?",
    passage: "",
    options: [
      "어깨를 나란히 하다",
      "눈을 의심하다",
      "손을 털다",
      "부화뇌동(附和雷同)하다 / 덩달아 춤을 추다",
      "발등을 찍다"
    ],
    answer: 3,
    explanation: "'부화뇌동하다' 또는 '남의 장단에 춤추다(덩달아 춤추다)'는 줏대 없이 남의 행동을 무비판적으로 따라 함을 뜻합니다.\n• ① '어깨를 나란히 하다': 대등한 지위나 실력을 겨루다.\n• ③ '손을 털다': 부정적인 일에서 깨끗이 손을 떼고 정리하다."
  },
  {
    id: 29,
    type: "속담",
    source: "2020학년도 9월 모의평가",
    question: "다음 상황을 비유하는 속담으로 가장 적절한 것은?",
    passage: "평소에는 연락도 전혀 없다가 본인이 수능 기출 분석 노트가 필요해지자 갑자기 친한 척하며 연락해 온 친구의 행동.",
    options: [
      "종로에서 뺨 맞고 한강에서 화풀이한다",
      "달면 삼키고 쓰면 뱉는다",
      "뱁새가 황새 따라가다 가랑이 찢어진다",
      "누워서 떡 먹기",
      "사공이 많으면 배가 산으로 간다"
    ],
    answer: 1,
    explanation: "'달면 삼키고 쓰면 뱉는다(염량세태, 감탄고토)'는 사리의 옳고 그름을 떠나 자신에게 이익이 될 때는 붙고, 불리해지면 가차 없이 버리는 이기적인 태도를 비판합니다."
  },
  {
    id: 30,
    type: "관용표현",
    source: "2024학년도 EBS 수능완성 실전모의",
    question: "‘서로의 실력이나 힘이 팽팽하여 우열을 가리기 어렵다’를 뜻하는 관용표현은?",
    passage: "",
    options: [
      "우후죽순(雨後竹筍)",
      "새옹지마(塞翁之馬)",
      "막상막하(莫上莫下) / 난형난제(難兄難弟)",
      "동문서답(東問西答)",
      "어부지리(漁父之利)"
    ],
    answer: 2,
    explanation: "'막상막하'와 '난형난제'는 두 대상의 우열을 쉽게 가릴 수 없을 만큼 실력이 팽팽함을 뜻합니다.\n• ① '우후죽순': 어떤 일이 한때에 무더기로 나타남.\n• ② '새옹지마': 인생의 길흉화복은 변화가 무쌍하여 예측하기 어려움.\n• ⑤ '어부지리': 제삼자가 뜻밖의 이득을 얻음."
  }
];

// --------------------------------------------------------------------------
// 2. [앱 상태 관리] State Management
// --------------------------------------------------------------------------
const QUIZ_SETTINGS = {
  TIME_LIMIT_SECONDS: 600, // 10분 = 600초
  QUESTION_COUNT: 10,       // 1회당 10문항
  TEACHER_PIN: "1234"       // 교사용 기본 비밀번호
};

let currentQuizQuestions = []; // 현재 응시 중인 10문항
let userAnswers = [];          // 학생 마킹 답안 (배열 인덱스 0~4)
let currentQuestionIndex = 0;  // 현재 풀고 있는 문항 인덱스 (0~9)
let timerSeconds = QUIZ_SETTINGS.TIME_LIMIT_SECONDS;
let timerInterval = null;
let examStartTime = null;

let studentInfo = {
  name: "",
  studentId: "",
  examDate: "",
  timeSpentFormatted: ""
};

let isRetestMode = false;      // 오답 다시 풀기 모드 여부
let lastWrongQuestionIndices = []; // 직전 시험에서 틀린 문항 원본 인덱스

// --------------------------------------------------------------------------
// 3. [DOM 요소 캐싱] Elements
// --------------------------------------------------------------------------
const screens = {
  start: document.getElementById("startScreen"),
  quiz: document.getElementById("quizScreen"),
  result: document.getElementById("resultScreen")
};

const dom = {
  // 시작 화면
  studentNameInput: document.getElementById("studentNameInput"),
  studentIdInput: document.getElementById("studentIdInput"),
  btnStartQuiz: document.getElementById("btnStartQuiz"),
  btnOpenTeacherModal: document.getElementById("btnOpenTeacherModal"),

  // 퀴즈 화면
  timerDisplay: document.getElementById("timerDisplay"),
  timerBox: document.getElementById("timerBox"),
  quizProgressBar: document.getElementById("quizProgressBar"),
  progressText: document.getElementById("progressText"),
  
  qNumberBadge: document.getElementById("qNumberBadge"),
  qTypeTag: document.getElementById("qTypeTag"),
  qSourceTag: document.getElementById("qSourceTag"),
  qStem: document.getElementById("qStem"),
  qPassageBox: document.getElementById("qPassageBox"),
  optionsContainer: document.getElementById("optionsContainer"),
  
  omrGrid: document.getElementById("omrGrid"),
  btnPrevQuestion: document.getElementById("btnPrevQuestion"),
  btnNextQuestion: document.getElementById("btnNextQuestion"),
  btnSubmitExam: document.getElementById("btnSubmitExam"),

  // 결과 화면
  scoreValueDisplay: document.getElementById("scoreValueDisplay"),
  scoreGradeTag: document.getElementById("scoreGradeTag"),
  statTimeTaken: document.getElementById("statTimeTaken"),
  statCorrectCount: document.getElementById("statCorrectCount"),
  statWrongCount: document.getElementById("statWrongCount"),
  btnRetryWrong: document.getElementById("btnRetryWrong"),
  btnNewExam: document.getElementById("btnNewExam"),
  reviewListContainer: document.getElementById("reviewListContainer"),

  // 교사용 모달
  teacherModal: document.getElementById("teacherModal"),
  btnCloseModal: document.getElementById("btnCloseModal"),
  pinInputSection: document.getElementById("pinInputSection"),
  pinInput: document.getElementById("pinInput"),
  btnPinSubmit: document.getElementById("btnPinSubmit"),
  pinErrorMsg: document.getElementById("pinErrorMsg"),
  
  dashboardView: document.getElementById("dashboardView"),
  totalExamsCount: document.getElementById("totalExamsCount"),
  avgScoreCount: document.getElementById("avgScoreCount"),
  highScoreCount: document.getElementById("highScoreCount"),
  resultsTableBody: document.getElementById("resultsTableBody"),
  btnExportCsv: document.getElementById("btnExportCsv"),
  btnClearRecords: document.getElementById("btnClearRecords")
};

// --------------------------------------------------------------------------
// 4. [화면 전환 함수]
// --------------------------------------------------------------------------
function showScreen(screenKey) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });
  if (screens[screenKey]) {
    screens[screenKey].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// --------------------------------------------------------------------------
// 5. [유틸리티] 배열 무작위 추출 및 셔플 (Fisher-Yates)
// --------------------------------------------------------------------------
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sampleQuestions(bank, count) {
  const shuffled = shuffleArray(bank);
  return shuffled.slice(0, count);
}

// --------------------------------------------------------------------------
// 6. [퀴즈 시작 및 초기화]
// --------------------------------------------------------------------------
function startNewExam(isRetest = false, customQuestions = null) {
  isRetestMode = isRetest;

  if (isRetest && customQuestions) {
    currentQuizQuestions = customQuestions;
  } else {
    currentQuizQuestions = sampleQuestions(QUESTION_BANK, QUIZ_SETTINGS.QUESTION_COUNT);
  }

  // 초기 상태 리셋
  userAnswers = new Array(currentQuizQuestions.length).fill(null);
  currentQuestionIndex = 0;
  timerSeconds = QUIZ_SETTINGS.TIME_LIMIT_SECONDS;
  examStartTime = new Date();

  // OMR 버튼 동적 생성
  renderOmrGrid();

  // 첫 문항 렌더링
  renderCurrentQuestion();

  // 타이머 작동
  startTimer();

  // 화면 전환
  showScreen("quiz");
}

// --------------------------------------------------------------------------
// 7. [타이머 로직]
// --------------------------------------------------------------------------
function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    // 1분(60초) 이하 경고 스타일
    if (timerSeconds <= 60) {
      dom.timerBox.classList.add("timer-warning");
    } else {
      dom.timerBox.classList.remove("timer-warning");
    }

    // 시간 초과 시 자동 제출
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      alert("⏱️ 시험 시간 10분이 모두 종료되었습니다! 답안이 자동으로 제출됩니다.");
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  dom.timerDisplay.textContent = `${mm}:${ss}`;
}

// --------------------------------------------------------------------------
// 8. [문제 화면 렌더링]
// --------------------------------------------------------------------------
function renderCurrentQuestion() {
  const q = currentQuizQuestions[currentQuestionIndex];
  if (!q) return;

  // 문항 번호, 영역 태그 및 출처 배지
  dom.qNumberBadge.textContent = `문항 ${currentQuestionIndex + 1}`;
  dom.qTypeTag.textContent = q.type || "수능 국어";
  dom.qSourceTag.textContent = q.source || "수능·모의평가 기출";

  // 발문
  dom.qStem.textContent = q.question;

  // <보기> 지문 처리
  if (q.passage && q.passage.trim() !== "") {
    dom.qPassageBox.style.display = "block";
    dom.qPassageBox.className = "question-passage-box quote";
    dom.qPassageBox.innerHTML = q.passage.replace(/\n/g, "<br>");
  } else {
    dom.qPassageBox.style.display = "none";
  }

  // 선지 5개 렌더링
  dom.optionsContainer.innerHTML = "";
  const circleNumbers = ["①", "②", "③", "④", "⑤"];

  q.options.forEach((optText, idx) => {
    const item = document.createElement("div");
    item.className = "option-item";
    if (userAnswers[currentQuestionIndex] === idx) {
      item.classList.add("selected");
    }

    item.innerHTML = `
      <div class="option-number">${circleNumbers[idx]}</div>
      <div class="option-text">${optText}</div>
    `;

    item.addEventListener("click", () => {
      selectOption(idx);
    });

    dom.optionsContainer.appendChild(item);
  });

  // 진행률 및 OMR 활성화 상태 갱신
  updateProgressUI();
  updateOmrButtonsState();

  // 이전/다음 버튼 활성/비활성 제어
  dom.btnPrevQuestion.disabled = (currentQuestionIndex === 0);
  if (currentQuestionIndex === currentQuizQuestions.length - 1) {
    dom.btnNextQuestion.textContent = "답안 검토 완료";
  } else {
    dom.btnNextQuestion.innerHTML = `다음 문항 <span class="arrow">›</span>`;
  }
}

// 선지 선택 핸들러
function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  // UI 선지 선택 표시 업데이트
  const allOptionItems = dom.optionsContainer.querySelectorAll(".option-item");
  allOptionItems.forEach((el, idx) => {
    if (idx === optionIndex) {
      el.classList.add("selected");
    } else {
      el.classList.remove("selected");
    }
  });

  // OMR 그리드 마킹 반영
  updateOmrButtonsState();
  updateProgressUI();
}

// --------------------------------------------------------------------------
// 9. [OMR 그리드 컨트롤]
// --------------------------------------------------------------------------
function renderOmrGrid() {
  dom.omrGrid.innerHTML = "";
  currentQuizQuestions.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "omr-btn";
    btn.textContent = idx + 1;
    btn.setAttribute("title", `${idx + 1}번 문항으로 이동`);
    
    btn.addEventListener("click", () => {
      currentQuestionIndex = idx;
      renderCurrentQuestion();
    });

    dom.omrGrid.appendChild(btn);
  });
}

function updateOmrButtonsState() {
  const omrButtons = dom.omrGrid.querySelectorAll(".omr-btn");
  omrButtons.forEach((btn, idx) => {
    // 마킹 여부
    if (userAnswers[idx] !== null) {
      btn.classList.add("marked");
    } else {
      btn.classList.remove("marked");
    }

    // 현재 선택된 문항 포커스
    if (idx === currentQuestionIndex) {
      btn.classList.add("active-current");
    } else {
      btn.classList.remove("active-current");
    }
  });
}

function updateProgressUI() {
  const answeredCount = userAnswers.filter(ans => ans !== null).length;
  const totalCount = currentQuizQuestions.length;
  const percent = Math.round((answeredCount / totalCount) * 100);

  dom.quizProgressBar.style.width = `${percent}%`;
  dom.progressText.textContent = `${answeredCount} / ${totalCount} 풀이 완료`;
}

// --------------------------------------------------------------------------
// 10. [시험 제출 및 채점]
// --------------------------------------------------------------------------
function submitExam() {
  clearInterval(timerInterval);

  // 미풀이 문항 체크
  const unAnsweredIndices = [];
  userAnswers.forEach((ans, idx) => {
    if (ans === null) unAnsweredIndices.push(idx + 1);
  });

  if (unAnsweredIndices.length > 0 && timerSeconds > 0) {
    const confirmSubmit = confirm(
      `⚠️ 아직 풀지 않은 문항이 ${unAnsweredIndices.length}개 있습니다!\n(미풀이 문항: ${unAnsweredIndices.join(", ")}번)\n\n이대로 최종 제출하시겠습니까?`
    );
    if (!confirmSubmit) {
      startTimer(); // 타이머 재개
      return;
    }
  }

  // 소요 시간 계산
  const timeTakenSeconds = QUIZ_SETTINGS.TIME_LIMIT_SECONDS - timerSeconds;
  const spentMinutes = Math.floor(timeTakenSeconds / 60);
  const spentSeconds = timeTakenSeconds % 60;
  studentInfo.timeSpentFormatted = `${spentMinutes}분 ${spentSeconds}초`;

  // 채점 계산
  let correctCount = 0;
  lastWrongQuestionIndices = [];

  currentQuizQuestions.forEach((q, idx) => {
    if (userAnswers[idx] === q.answer) {
      correctCount++;
    } else {
      lastWrongQuestionIndices.push(idx);
    }
  });

  const totalCount = currentQuizQuestions.length;
  const rawScore = Math.round((correctCount / totalCount) * 100);
  const wrongCount = totalCount - correctCount;

  // 결과 화면 데이터 바인딩
  dom.scoreValueDisplay.textContent = rawScore;
  dom.statTimeTaken.textContent = studentInfo.timeSpentFormatted;
  dom.statCorrectCount.textContent = `${correctCount}개`;
  dom.statWrongCount.textContent = `${wrongCount}개`;

  // 수능 성취도 등급 태그 부여
  applyGradeBadge(rawScore);

  // 오답 다시 풀기 버튼 제어 (틀린 문제가 없으면 숨김)
  if (wrongCount === 0) {
    dom.btnRetryWrong.style.display = "none";
  } else {
    dom.btnRetryWrong.style.display = "flex";
    dom.btnRetryWrong.innerHTML = `<span>✏️</span> 틀린 ${wrongCount}문항만 바로 다시 풀기`;
  }

  // 상세 해설지(오답 노트) 렌더링
  renderReviewList();

  // 교사용 대시보드 저장용 기록 저장 (LocalStorage)
  saveStudentExamRecord({
    date: new Date().toLocaleString("ko-KR", { dateStyle: "short", timeStyle: "short" }),
    name: studentInfo.name || "익명 수험생",
    studentId: studentInfo.studentId || "-",
    score: rawScore,
    correctCount,
    wrongCount,
    timeTaken: studentInfo.timeSpentFormatted,
    isRetest: isRetestMode
  });

  // 결과 화면 전환
  showScreen("result");
}

function applyGradeBadge(score) {
  let gradeClass = "";
  let gradeText = "";

  if (score >= 90) {
    gradeClass = "grade-1";
    gradeText = "🏆 수능 1등급 수준 (어휘 마스터!)";
  } else if (score >= 80) {
    gradeClass = "grade-2";
    gradeText = "🥈 수능 2등급 수준 (안정권 진입)";
  } else if (score >= 70) {
    gradeClass = "grade-3";
    gradeText = "🥉 수능 3등급 수준 (조금 더 보완)";
  } else {
    gradeClass = "grade-re";
    gradeText = "📚 집중 복습 필요 (오답노트 필독)";
  }

  dom.scoreGradeTag.className = `stat-grade-tag ${gradeClass}`;
  dom.scoreGradeTag.textContent = gradeText;
}

// --------------------------------------------------------------------------
// 11. [해설지 및 오답 노트 렌더링]
// --------------------------------------------------------------------------
function renderReviewList() {
  dom.reviewListContainer.innerHTML = "";
  const circleNumbers = ["①", "②", "③", "④", "⑤"];

  currentQuizQuestions.forEach((q, idx) => {
    const userChoice = userAnswers[idx];
    const isCorrect = (userChoice === q.answer);

    const card = document.createElement("div");
    card.className = `review-card ${isCorrect ? "correct" : "wrong"}`;

    const statusHtml = isCorrect
      ? `<span class="review-card-status status-correct">✓ 정답 (+10점)</span>`
      : `<span class="review-card-status status-wrong">✕ 오답 (내가 고른 답: ${userChoice !== null ? circleNumbers[userChoice] : "미표기"})</span>`;

    let passageHtml = "";
    if (q.passage && q.passage.trim() !== "") {
      passageHtml = `<div class="review-passage">${q.passage.replace(/\n/g, "<br>")}</div>`;
    }

    // 선지 요약
    let optionsSummaryHtml = "";
    q.options.forEach((optText, optIdx) => {
      let optRowClass = "";
      let optTag = "";
      if (optIdx === q.answer) {
        optRowClass = "is-answer";
        optTag = " [정답]";
      } else if (optIdx === userChoice && !isCorrect) {
        optRowClass = "is-user-wrong";
        optTag = " [내 선택]";
      }

      optionsSummaryHtml += `
        <div class="review-option-row ${optRowClass}">
          <span>${circleNumbers[optIdx]}</span>
          <span>${optText}${optTag}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-card-header">
        <div class="meta-tags-group">
          <span class="question-number-badge">문항 ${idx + 1} (${q.type})</span>
          <span class="review-source-tag">📚 ${q.source || "수능·모의평가 기출"}</span>
        </div>
        ${statusHtml}
      </div>
      <div class="review-question-text">${q.question}</div>
      ${passageHtml}
      <div class="review-options-summary">
        ${optionsSummaryHtml}
      </div>
      <div class="review-explanation-box">
        <div class="explanation-title">📖 수능 핵심 해설 & 뜻풀이</div>
        <p><strong>[정답: ${circleNumbers[q.answer]} ${q.options[q.answer]}]</strong></p>
        <p style="margin-top:0.35rem;">${q.explanation.replace(/\n/g, "<br>")}</p>
      </div>
    `;

    dom.reviewListContainer.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 12. [오답 다시 풀기 (Re-test) 기능]
// --------------------------------------------------------------------------
function retryWrongQuestions() {
  if (lastWrongQuestionIndices.length === 0) return;

  const wrongQuestions = lastWrongQuestionIndices.map(idx => currentQuizQuestions[idx]);
  
  if (confirm(`틀린 ${wrongQuestions.length}문항을 다시 응시하시겠습니까?`)) {
    startNewExam(true, wrongQuestions);
  }
}

// --------------------------------------------------------------------------
// 13. [교사용 로컬스토리지 대시보드]
// --------------------------------------------------------------------------
const STORAGE_KEY = "csat_korean_quiz_records_v1";

function getStoredRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("로컬 스토리지 읽기 오류", e);
    return [];
  }
}

function saveStudentExamRecord(record) {
  try {
    const records = getStoredRecords();
    records.unshift(record); // 최신 시험이 위로
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (e) {
    console.error("로컬 스토리지 쓰기 오류", e);
  }
}

function clearAllRecords() {
  if (confirm("정말로 모든 학생 응시 기록을 초기화하시겠습니까? (삭제 후 복구 불가)")) {
    localStorage.removeItem(STORAGE_KEY);
    renderDashboardStats();
  }
}

function renderDashboardStats() {
  const records = getStoredRecords();
  
  // 통계 계산
  dom.totalExamsCount.textContent = `${records.length}회`;

  if (records.length === 0) {
    dom.avgScoreCount.textContent = "0점";
    dom.highScoreCount.textContent = "0점";
    dom.resultsTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="empty-table-msg">
          아직 응시한 학생 기록이 없습니다. 시험을 치르면 이곳에 자동으로 누적됩니다.
        </td>
      </tr>
    `;
    return;
  }

  const scores = records.map(r => r.score);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const max = Math.max(...scores);

  dom.avgScoreCount.textContent = `${avg}점`;
  dom.highScoreCount.textContent = `${max}점`;

  // 테이블 행 렌더링
  dom.resultsTableBody.innerHTML = "";
  records.forEach((r) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.date}</td>
      <td><strong>${escapeHtml(r.name)}</strong></td>
      <td>${escapeHtml(r.studentId)}</td>
      <td><span style="color:${r.score >= 80 ? 'var(--primary-blue)' : 'var(--accent-red)'}; font-weight:bold;">${r.score}점</span></td>
      <td>${r.timeTaken}</td>
      <td>${r.wrongCount}개 틀림 ${r.isRetest ? '<span style="color:blue; font-size:0.75rem;">(재시험)</span>' : ''}</td>
    `;
    dom.resultsTableBody.appendChild(tr);
  });
}

function exportRecordsToCsv() {
  const records = getStoredRecords();
  if (records.length === 0) {
    alert("내보낼 학생 응시 데이터가 없습니다.");
    return;
  }

  // 엑셀 한글 깨짐 방지용 UTF-8 BOM(\uFEFF) 추가
  let csvContent = "\uFEFF응시일시,이름,학번,점수,소요시간,오답수,응시구분\n";

  records.forEach(r => {
    const row = [
      `"${r.date}"`,
      `"${r.name}"`,
      `"${r.studentId}"`,
      r.score,
      `"${r.timeTaken}"`,
      r.wrongCount,
      r.isRetest ? "오답재시험" : "정규모의고사"
    ].join(",");
    csvContent += row + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `수능_국어어휘_응시기록_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[m]);
}

// --------------------------------------------------------------------------
// 14. [이벤트 리스너 바인딩]
// --------------------------------------------------------------------------
function setupEventListeners() {
  // 시작 버튼
  dom.btnStartQuiz.addEventListener("click", () => {
    const name = dom.studentNameInput.value.trim();
    const studentId = dom.studentIdInput.value.trim();

    if (!name) {
      alert("이름을 입력해 주세요!");
      dom.studentNameInput.focus();
      return;
    }

    studentInfo.name = name;
    studentInfo.studentId = studentId || "미기재";

    startNewExam(false);
  });

  // 엔터 키로 시작
  dom.studentNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") dom.btnStartQuiz.click();
  });
  dom.studentIdInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") dom.btnStartQuiz.click();
  });

  // 이전 문항 버튼
  dom.btnPrevQuestion.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderCurrentQuestion();
    }
  });

  // 다음 문항 버튼
  dom.btnNextQuestion.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
      currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      // 마지막 문항에서 클릭 시 OMR 점검 안내
      alert("모든 문항을 검토하셨습니다. 답안 확인 후 우측의 [최종 답안 제출하기] 버튼을 눌러주세요!");
    }
  });

  // 최종 제출 버튼
  dom.btnSubmitExam.addEventListener("click", () => {
    submitExam();
  });

  // 오답 다시 풀기 버튼
  dom.btnRetryWrong.addEventListener("click", () => {
    retryWrongQuestions();
  });

  // 새로운 시험 시작하기 버튼
  dom.btnNewExam.addEventListener("click", () => {
    showScreen("start");
  });

  // 교사용 모드 모달 열기
  dom.btnOpenTeacherModal.addEventListener("click", () => {
    dom.teacherModal.classList.add("active");
    dom.pinInput.value = "";
    dom.pinErrorMsg.textContent = "";
    dom.pinInputSection.style.display = "block";
    dom.dashboardView.classList.remove("active");
    dom.pinInput.focus();
  });

  // 교사용 모달 닫기
  dom.btnCloseModal.addEventListener("click", () => {
    dom.teacherModal.classList.remove("active");
  });

  // 모달 바깥 배경 클릭 시 닫기
  dom.teacherModal.addEventListener("click", (e) => {
    if (e.target === dom.teacherModal) {
      dom.teacherModal.classList.remove("active");
    }
  });

  // PIN 인증
  dom.btnPinSubmit.addEventListener("click", checkTeacherPin);
  dom.pinInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkTeacherPin();
  });

  // 대시보드 액션 (CSV 내보내기, 기록 초기화)
  dom.btnExportCsv.addEventListener("click", exportRecordsToCsv);
  dom.btnClearRecords.addEventListener("click", clearAllRecords);
}

function checkTeacherPin() {
  const entered = dom.pinInput.value.trim();
  if (entered === QUIZ_SETTINGS.TEACHER_PIN) {
    dom.pinInputSection.style.display = "none";
    dom.dashboardView.classList.add("active");
    renderDashboardStats();
  } else {
    dom.pinErrorMsg.textContent = "비밀번호가 일치하지 않습니다. (기본 PIN: 1234)";
    dom.pinInput.focus();
  }
}

// --------------------------------------------------------------------------
// 15. [초기 실행]
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  showScreen("start");
});
