const faqs = [
  {
    question: 'How does RentSimConnect work?',
    answer:
      'It’s simple! Choose a plan, receive your SIM or eSIM via airport pickup, hotel delivery, or email, and activate it instantly. No paperwork, no hassle!'
  },
  {
    question: 'How do I get my SIM or eSIM?',
    answer:
      'Once you place your order, we’ll deliver your physical SIM via airport pickup or hotel delivery, or send your eSIM directly to your email for instant activation.'
  },
  {
    question: 'What happens when my plan expires?',
    answer:
      'You can easily extend your plan without changing SIMs—just top up and continue enjoying seamless connectivity!'
  },
  {
    question: 'Can I keep my original number while using your eSIM?',
    answer:
      'Yes! Our eSIM lets you stay connected in Ghana while keeping your original home country number active. Receive calls and texts as usual while enjoying local rates for data and calls.'
  },
  {
    question: 'Will my internet speed be fast?',
    answer:
      'Absolutely! We provide high-speed, uninterrupted internet, so you can browse, stream, and work without lag or frustrating service drops.'
  },
  {
    question: 'Can I use this service outside Ghana?',
    answer:
      'Yes! Our SIM and eSIM work in 26 African countries at no extra charge. Travel seamlessly without switching SIMs or paying roaming fees.'
  },
  {
    question: 'Is RentSimConnect a Legitimate Service?',
    answer:
      'Yes! RentSimConnect Travel & Tours is a legally registered business with Ghana’s Registrar General’s Department as a licensed second-party telecommunications vendor. We operate transparently, ensuring reliable and secure connectivity for all travelers. Trusted by tourists and business travelers worldwide!'
  },
  {
    question: 'How am I saving over 70% on roaming charges?',
    answer:
      'Most international roaming plans cost around $10/day—sometimes even more! Our packages start at just $2.50/day, giving you the same fast, reliable internet at a fraction of the cost. That’s over 70% in savings compared to traditional roaming fees!'
  },
  {
    question: 'Do I get a refund if the service doesn’t work as promised?',
    answer:
      'Yes! If you experience service issues, you’re eligible for a full refund. Plus, we offer partial refunds for unused days if you need to terminate early. For example, if you purchase a 7-day package but leave after 3 days, we’ll refund the remaining 4 unused days—no hassle!'
  }
]

const layoutEl = document.querySelector('.faqs .list')

function renderFAQs() {
  console.log('LAYOUT EL: ', layoutEl)
  layoutEl.innerHTML = ''

  if (faqs.length > 0) {
    faqs.forEach((item, i) => {
      const cardEl = setFAQ(i, item.question, item.answer)
      console.log('card el', cardEl)
      layoutEl.appendChild(cardEl)
    })
  }
}

function setFAQ(i, question, answer) {
  const cardEl = document.createElement('div')
  cardEl.setAttribute('id', `faq__${i}`)
  cardEl.setAttribute('class', 'card')

  const questionEl = document.createElement('div')
  const questionTextEl = document.createElement('p')
  const questionTriggerEl = document.createElement('span')
  const triggerIconEl = document.createElement('i')
  const answerEl = document.createElement('div')

  questionEl.setAttribute('class', 'question')
  triggerIconEl.setAttribute('class', 'ph-bold ph-plus')
  answerEl.setAttribute('class', 'answer')

  questionTriggerEl.appendChild(triggerIconEl)
  questionEl.appendChild(questionTriggerEl)
  questionEl.appendChild(questionTextEl)

  questionTextEl.textContent = question
  answerEl.textContent = answer

  cardEl.appendChild(questionEl)
  cardEl.appendChild(answerEl)

  questionEl.addEventListener('click', () => toggleFAQ(i))

  return cardEl
}

function toggleFAQ(i) {
  const answerEl = document.querySelector(`#faq__${i} .answer`)

  if (answerEl.classList.contains('active')) {
    answerEl.setAttribute('class', 'answer')
  } else {
    answerEl.setAttribute('class', 'answer active')
  }
}

renderFAQs()
