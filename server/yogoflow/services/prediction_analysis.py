"""
Defines the number of non-matching contiguous frames to allow before 
a new section is created.
"""
DEFAULT_STREAK_SIZE = 2


# A contiguous sequence of matching predictions.
class Streak:
  start = 0
  count = 0
  value = None


"""
Quantizes the predictions into sections based on streaks of matching predictions.
:param predictions: A list of predictions. [{value: string, confidence: float}]
:return: A list of sections. [{start: int, end: int, value: string}]
"""


def quantize_predictions(predictions, streak_size=DEFAULT_STREAK_SIZE):
  if len(predictions) == 0:
    return []

  # Maintain 2 streaks, streak_1 is the primary streak, streak_2 is the "next streak"
  # If streak_2 is long enough, then we can promote it to streak_1
  streak_1 = Streak()
  streak_2 = Streak()
  streaks = []

  def save_streak(streak, end):
    streaks.append({
        'start': streak.start,
        'end': end,
        'value': streak.value,
    })

  for i, prediction in enumerate(predictions):
    value = prediction.get('value')
    if streak_1.value is None:
      streak_1.value = value
      streak_1.start = i
      streak_1.count = 1
      continue

    if value == streak_1.value:
      streak_1.count += 1
      continue

    if value != streak_2.value:
      streak_2.value = value
      streak_2.start = i
      streak_2.count = 1
      continue

    if value == streak_2.value:
      streak_2.count += 1
      if streak_2.count >= streak_size:
        if (streak_1.count >= streak_size):
          save_streak(streak_1, streak_2.start)
        streak_1 = streak_2
        streak_2 = Streak()
        continue

  if (streak_1.count >= streak_size):
    save_streak(streak_1, len(predictions))
  return streaks
