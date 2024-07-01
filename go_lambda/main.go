package main

import (
	"context"
	"log"
	"strconv"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/dynamodb/attributevalue"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb"
	"github.com/aws/aws-sdk-go-v2/service/dynamodb/types"
)

type Item struct {
	ID    string `dynamodbav:"id" json:"id"`
	Views int    `dynamodbav:"views" json:"views"`
}

func main() {
	lambda.Start(handler)
}

func handler() (views int, err error) {
	// Using the SDK's default configuration, loading additional config
	// and credentials values from the environment variables, shared
	// credentials, and shared configuration files
	cfg, err := config.LoadDefaultConfig(context.TODO(),
		config.WithRegion("us-east-2"),
	)
	if err != nil {
		panic(err)
	}

	// Using the Config value, create the DynamoDB client
	svc := dynamodb.NewFromConfig(cfg)

	// Name of table
	tableName := "cloudresume-table"

	// Build the request with its input parameters
	resp, err := svc.GetItem(context.TODO(), &dynamodb.GetItemInput{
		TableName: aws.String(tableName),
		Key: map[string]types.AttributeValue{
			"id": &types.AttributeValueMemberS{Value: "1"},
		},
	})
	if err != nil {
		panic(err)
	}

	if resp.Item == nil {
		panic("An error occured")
	}
	// Initialize Item struct
	item := Item{}

	err = attributevalue.UnmarshalMap(resp.Item, &item)
	if err != nil {
		panic("unmarshal failed")
	}
	// Increment views by 1
	item.Views++

	_, err = svc.PutItem(context.TODO(), &dynamodb.PutItemInput{
		TableName: aws.String(tableName),
		Item: map[string]types.AttributeValue{
			"id":    &types.AttributeValueMemberS{Value: "1"},
			"views": &types.AttributeValueMemberN{Value: strconv.Itoa(item.Views)},
		},
	})
	if err != nil {
		log.Printf("Could not add item to table. Why: %v\n", err)
	}

	log.Println(item.Views)
	return item.Views, err
}
