.PHONY: test dev run

test:
	python -m pytest tests --disable-warnings --capture=no

dev:
	flask --app yogoflow.app run --debug

run:
	gunicorn -w 4 'yogoflow.app:create_app()'