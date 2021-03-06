exports.card = {
  'contentType': 'application/vnd.microsoft.card.adaptive',
  'content': {
    '$schema': 'http://adaptivecards.io/schemas/adaptive-card.json',
    'type': 'AdaptiveCard',
    'version': '1.0',
    'body': [
      {
        'type': 'TextBlock',
        'text': '체크인 날짜 선택'
      },
      {
        'type': 'Input.Date',
        'id': 'checkinDate'
      },
      {
        'type': 'TextBlock',
        'text': '체크아웃 날짜 선택'
      },
      {
        'type': 'Input.Date',
        'id': 'checkoutDate'
      }

    ],
    'actions': [
      {
        'type': 'Action.Submit',
        'title': 'OK'
      }
    ]
  }
}
