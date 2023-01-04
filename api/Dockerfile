FROM python:3.11.1
ADD . /api
WORKDIR /api
RUN pip install -r requirements.txt
CMD ["uvicorn", "main:app", "--host=0.0.0.0" , "--reload" , "--port", "8000"]
