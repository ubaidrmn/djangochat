FROM python
WORKDIR /api/src/
COPY ./src/requirements.txt /api/src
RUN pip install -r requirements.txt
CMD python manage.py runserver
