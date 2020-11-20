FROM ubuntu

COPY ./setup-secrets.sh .
RUN chmod +x ./setup-secrets

CMD [ "./setup-secrets.sh" ]
