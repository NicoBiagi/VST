var likert_scale_second_questionnaire = [
    "Not at all",
    "Somewhat",
    "Moderately so",
    "Very much so"
  ];
  
  var STAIT_survey = {
    type: jsPsychSurveyLikert,
     preamble: "<h1>STAI-T</h1><div>A number of statements which people have used to describe themselves are given below. Read each statement and then select the statement that indicates HOW YOU GENERALLY FEEL. There are no right or wrong answers. Do not spend too much time on any one     statement but give the answer which seems to describe how you generally feel. Thank you.</div>",
    questions: [
      {prompt: "<b>I feel that difficulties are piling up so that I cannot overcome them.</b>", labels: likert_scale_second_questionnaire, required: true},
      {prompt: "<b>I  worry too much over something that really doesn't matter.</b>", labels: likert_scale_second_questionnaire, required: true},
      {prompt: "<b>Some unimportant thoughts run through my mind and bothers me.</b>", labels: likert_scale_second_questionnaire, required: true},
      {prompt: "<b>I take disappointments so keenly that I can't put them out of my mind.</b>", labels: likert_scale_second_questionnaire, required: true},
      {prompt: "<b>I get in a state of tension or turmoil as I think over my recent concerns and interests.</b>", labels: likert_scale_second_questionnaire, required: true},
    ],
    randomize_question_order: false
  };

  