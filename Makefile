REPO=message-api
TIMESTAMP=tmp-$(shell date +%s )
NSPACE=dev
DFILE=mesage.yaml
VERSION=v1

.PHONY: update
update:
	@eval $$(minikube docker-env) ;\
	docker image build -t message-api:v1 ./message
	kubectl set image deployment/hello-node *=message-api:v1

.PHONY: delete
delete:
	kubectl delete deployment hello-node
	kubectl delete service hello-node
	kubectl delete ing my-ing

.PHONY: create
create:
	@eval $$(minikube docker-env) ;\
	docker image build -t message-api:v1 ./message
	kubectl create -f message.yaml
