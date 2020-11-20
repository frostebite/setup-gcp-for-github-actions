FROM ubuntu

COPY ./setup-secrets.sh .
RUN chmod +x ./setup-secrets.sh

CMD [ "./setup-secrets.sh" ]
