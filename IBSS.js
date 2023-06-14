var likert_scale_third_questionnaire = [ 
    "Does not apply at all",
    "Applies a bit",
    "Applies somewhat",
    "Applies mostly",
    "Applies completely"
  ];
  
  var IBSS_survey = {
    type: jsPsychSurveyLikert,
     preamble: "<h1>Questionnaire 3</h1><div>The following statements may apply more or less to you. To what extent do you think each statement applies to you personally?</div>",
    questions: [
      {prompt: "<b>Sometimes I do things impulsively that I should not do</b>", labels: likert_scale_third_questionnaire, required: true},
      {prompt: "<b>I sometimes do things to cheer myself up that I later regret.</b>", labels: likert_scale_third_questionnaire, required: true},
      {prompt: "<b>I usually think carefully before I act</b>", labels: likert_scale_third_questionnaire, required: true},
      {prompt: "<b>I usually consider things carefully and logically before I make up my mind</b>", labels: likert_scale_third_questionnaire, required: true},
      {prompt: "<b>I always bring to an end what I have started</b>", labels: likert_scale_third_questionnaire, required: true},
      {prompt: "<b>I plan my schedule so that I get everything done on time</b>", labels: likert_scale_third_questionnaire, required: true},
      {prompt: "<b>I am willing to take risks</b>", labels: likert_scale_third_questionnaire, required: true},
      {prompt: "<b>I am happy to take chances</b>", labels: likert_scale_third_questionnaire, required: true},
    ],
    randomize_question_order: false
  };
