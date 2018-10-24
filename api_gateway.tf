resource "aws_api_gateway_rest_api" "tiny_lambda" {
  name        = "TinyLambda"
  description = "The smallest most pointless lambda function"
}
