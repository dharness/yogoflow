from pathlib import Path
from pprint import pprint

import pytest

from yogoflow.services.prediction_analysis import quantize_predictions


def _make_predictions(options):
  predictions = []
  for [value, amount] in options:
    predictions += [{'value': value, 'confidence': 1.0}] * amount
  return predictions


def _log_predictions(quantized_predictions):
  print('\n')
  for p in quantized_predictions:
    start = p['start']
    end = p['end']
    print(p['value'], start, end)


def test_quantize():
  test_predictions = _make_predictions([
      ['standing', 5],
      ['squatting', 5],
  ])

  quantized_predictions = quantize_predictions(test_predictions, streak_size=4)
  assert len(quantized_predictions) == 2

  assert quantized_predictions[0]['value'] == 'standing'
  assert quantized_predictions[0]['start'] == 0
  assert quantized_predictions[0]['end'] == 5

  assert quantized_predictions[1]['value'] == 'squatting'
  assert quantized_predictions[1]['start'] == 5
  assert quantized_predictions[1]['end'] == 10


def test_quantize_noisy():
  test_predictions = _make_predictions([
      ['standing', 5],
      ['bending', 1],
      ['ruffling', 3],
      ['standing', 4],
      ['squatting', 5],
  ])

  quantized_predictions = quantize_predictions(test_predictions, streak_size=4)

  assert len(quantized_predictions) == 2

  assert quantized_predictions[0]['value'] == 'standing'
  assert quantized_predictions[0]['start'] == 0
  assert quantized_predictions[0]['end'] == 13

  assert quantized_predictions[1]['value'] == 'squatting'
  assert quantized_predictions[1]['start'] == 13
  assert quantized_predictions[1]['end'] == 18


def test_quantize_one_category():
  test_predictions = _make_predictions([
      ['standing', 5],
  ])

  quantized_predictions = quantize_predictions(test_predictions, streak_size=4)

  assert len(quantized_predictions) == 1

  assert quantized_predictions[0]['value'] == 'standing'
  assert quantized_predictions[0]['start'] == 0
  assert quantized_predictions[0]['end'] == 5


def test_quantize_streaks_too_small():
  test_predictions = _make_predictions([
      ['standing', 1],
      ['squatting', 1],
  ])

  quantized_predictions = quantize_predictions(test_predictions, streak_size=4)

  assert len(quantized_predictions) == 0


def test_quantize_respect_streak_size():
  test_predictions = _make_predictions([
      ['standing', 1],
      ['squatting', 5],
  ])

  quantized_predictions = quantize_predictions(test_predictions, streak_size=4)

  assert len(quantized_predictions) == 1

  assert quantized_predictions[0]['value'] == 'squatting'
  assert quantized_predictions[0]['start'] == 1
  assert quantized_predictions[0]['end'] == 6


def test_quantize_respect_streak_size():
  test_predictions = _make_predictions([
      ['standing', 5],
      ['squatting', 3],
  ])

  quantized_predictions = quantize_predictions(test_predictions, streak_size=4)

  assert len(quantized_predictions) == 1

  assert quantized_predictions[0]['value'] == 'standing'
  assert quantized_predictions[0]['start'] == 0
  assert quantized_predictions[0]['end'] == 8


def test_quantize_really_noisy():
  test_predictions = _make_predictions([
      ['standing', 1],
      ['sidebend', 10],
      ['standing', 2],
      ['sidebend', 3],
      ['standing', 2],
      ['squatting', 1],
      ['standing', 1],
      ['sidebend', 4],
      ['standing', 1],
      ['sidebend', 4],
      ['standing', 1],
  ])

  quantized_predictions = quantize_predictions(test_predictions, streak_size=2)

  assert len(quantized_predictions) == 6

  assert quantized_predictions[0]['value'] == 'sidebend'
  assert quantized_predictions[0]['start'] == 1
  assert quantized_predictions[0]['end'] == 11

  assert quantized_predictions[1]['value'] == 'standing'
  assert quantized_predictions[1]['start'] == 11
  assert quantized_predictions[1]['end'] == 13

  assert quantized_predictions[2]['value'] == 'sidebend'
  assert quantized_predictions[2]['start'] == 13
  assert quantized_predictions[2]['end'] == 16
