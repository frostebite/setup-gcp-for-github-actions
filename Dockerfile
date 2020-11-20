FROM ubuntu

RUN chmod +x ./setup-secrets.sh
COPY setup-secrets.sh .

CMD [ "./setup-secrets.sh" ]
