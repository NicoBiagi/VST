var likert_scale_IUS = [
  "Not at all characteristic of me",
  "A little characteristic of me",
  "Somewhat characteristic of me",
  "Very characteristic of me",
  "Entirely characteristic of me"
  ];
  
  var IUS_survey = {
    type: jsPsychSurveyLikert,
     preamble: "<h1>IUS</h1><div><b>You will find below a series of statements which describe how people may react to the uncertainties of life. Please use the scale below to describe to what extent each item is characteristic of you.</b></div>",
    questions: [
      {prompt: "<b>Unforeseen events upset me greatly.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>It frustrates me not having all the information I need.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>Uncertainty keeps me from living a full life.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>One should always look ahead so as to avoid surprises.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>A small unforeseen event can spoil everything, even with the best of planning.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>When it’s time to act, uncertainty paralyses me.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>When I am uncertain I can’t function very well.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>I always want to know what the future has in store for me.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>I can’t stand being taken by surprise.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>The smallest doubt can stop me from acting.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>I should be able to organize everything in advance.</b>", labels: likert_scale_IUS, required: true},
      {prompt: "<b>I must get away from all uncertain situations.</b>", labels: likert_scale_IUS, required: true},
    ],
    randomize_question_order: false
  };